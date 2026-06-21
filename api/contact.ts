import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import admin from 'firebase-admin';

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  try {
    if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          // Replace literal \n with actual newlines in private key
          privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        }),
      });
    } else {
      console.warn('Firebase Admin credentials not fully configured in environment. Using default/local credential fallback.');
      admin.initializeApp();
    }
  } catch (error) {
    console.error('Firebase Admin initialization error:', error);
  }
}

const db = admin.firestore();
const app = express();

// Use Helmet for basic HTTP header security
app.use(helmet());
app.disable('x-powered-by');

// Configure CORS
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://workspacebays.com',
  'https://workspacebays.in',
  // Match vercel deployment preview domains
  /https:\/\/workspacebay-.*-karanman12s-projects\.vercel\.app/,
  /https:\/\/workspacebay-.*\.vercel\.app/
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const isAllowed = allowedOrigins.some(allowed => {
      if (allowed instanceof RegExp) {
        return allowed.test(origin);
      }
      return allowed === origin;
    });
    
    if (isAllowed) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

// Strictly limit payload size to prevent DOS attacks
app.use(express.json({ limit: '10kb' }));

// Set up rate limiting: 5 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: 'Too many contact requests from this IP. Please try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Simple sanitization function to strip HTML tags and prevent XSS
const sanitizeString = (str: string): string => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .trim();
};

// Email validation helper
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// POST route for contact form submission
app.post(['/api/contact', '/'], async (req: Request, res: Response) => {
  try {
    const { name, businessName, email, phone, numUsers, planInterest, a_password } = req.body;

    // 0. Honeypot check for spam bots
    if (a_password) {
      // If honeypot field is filled, silently reject it as success to fool the bot
      return res.status(200).json({ success: true, message: 'Lead submitted successfully.' });
    }

    // 1. Validation
    const errors: string[] = [];
    if (!name || typeof name !== 'string' || !name.trim()) {
      errors.push('Name is required.');
    }
    if (!email || !isValidEmail(email)) {
      errors.push('A valid email address is required.');
    }
    if (!phone || typeof phone !== 'string' || !phone.trim()) {
      errors.push('Phone number is required.');
    }
    if (!numUsers || isNaN(Number(numUsers)) || Number(numUsers) <= 0) {
      errors.push('Number of users must be a valid positive number.');
    }
    if (!planInterest || typeof planInterest !== 'string' || !planInterest.trim()) {
      errors.push('Plan interest is required.');
    }

    if (errors.length > 0) {
      return res.status(400).json({ error: errors.join(' ') });
    }

    // 2. Sanitization
    const sanitizedData = {
      name: sanitizeString(name),
      businessName: sanitizeString(businessName || ''),
      email: sanitizeString(email),
      phone: sanitizeString(phone),
      numUsers: Number(numUsers),
      planInterest: sanitizeString(planInterest),
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      source: 'contact_page'
    };

    // 3. Save to Firestore
    await db.collection('leads').add(sanitizedData);

    return res.status(200).json({ success: true, message: 'Lead submitted successfully.' });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return res.status(500).json({ error: 'An internal server error occurred. Please try again later.' });
  }
});

export default app;
