<div align="center">

# 🌐 WorkspaceBays

### Google Workspace & Zoho Workplace Reseller — India

Premium, fully-managed cloud workspace licenses at the best prices in India with 24/7 support and 24-hour setup.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-12-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)

</div>

---

## 📖 About the Project

**WorkspaceBays** is a modern, high-performance landing page and lead-generation website for an authorized **Google Workspace** and **Zoho Workplace** reseller in India. The site allows Indian businesses to explore pricing plans, learn about workspace features, and submit contact/setup requests — all with INR billing, official tax invoices, and dedicated WhatsApp support.

The website is designed with a premium, editorial aesthetic featuring smooth animations, a brutalist-inspired card design system, and a concrete-glass UI language.

---

## 🛠️ Tech Stack & Languages

| Technology | Version | Purpose |
|---|---|---|
| **TypeScript** | ~5.8 | Primary programming language (type-safe JavaScript) |
| **React** | 19 | Frontend UI library for building interactive components |
| **Vite** | 6 | Lightning-fast build tool and dev server |
| **Tailwind CSS** | 4 | Utility-first CSS framework for rapid styling |
| **Firebase / Firestore** | 12 | Backend-as-a-Service for contact form submissions |
| **Framer Motion** (`motion`) | 12 | Animation library for smooth page transitions and micro-interactions |
| **Lucide React** | Latest | Modern icon set used throughout the UI |
| **Lenis** | 1.3 | Smooth scrolling library for premium scroll UX |
| **Google Fonts** | — | Custom typography (Outfit, Plus Jakarta Sans, Space Grotesk) |
| **HTML5** | — | Semantic markup and page structure |
| **CSS3** | — | Custom styles, animations, keyframes |

---

## ✨ Features

### 🎨 Design & UI
- **Branded Loading Screen** — Animated intro with brand logo reveal and cross-fade transition
- **Floating Pill Navbar** — Glassmorphism-style fixed navigation bar with smooth scroll links
- **Responsive Mobile Menu** — Animated hamburger menu with slide-in navigation
- **Concrete-Glass Card System** — Premium card components with hover effects and border transitions
- **Grid Background Pattern** — Subtle grid overlay for editorial depth
- **Ambient Spotlight Effects** — Dynamic background glow effects in the hero section
- **Micro-Animations** — Smooth entrance animations on scroll using Framer Motion
- **Dark/Light Sections** — Alternating dark (#161616) and light (#E4E4E4) section backgrounds

### 🏠 Hero Section
- **Typewriter Effect** — Animated text cycling through target audiences (Growing Companies, Indian Enterprises, Startups, Remote Teams)
- **Floating Dashboard Mockup** — 3D perspective dashboard UI for visual impact
- **Hero Typography Component** — Reusable animated headline with badge, heading, and description
- **CTA Buttons** — WhatsApp quick-connect and pricing plan navigation

### 📊 Stats Section
- Displays key value propositions: Official Partner, Instant INR Billing, 24-Hour Setup, Priority Support
- Dark background with white grid overlay for visual contrast

### 🔧 Features Section
- **6 Feature Cards** with individual icons and descriptions:
  - Professional Email (yourname@yourcompany.com)
  - Cloud Storage (2TB+)
  - HD Video Conferencing (up to 500 participants)
  - Docs, Sheets & Slides (real-time collaboration)
  - Admin Control Panel (user & security management)
  - Shared Calendar (smart scheduling)

### 💰 Pricing Section
- **Tabbed Pricing** — Toggle between Google Workspace and Zoho Workplace plans
- **3-Tier Pricing** for each platform:
  - **Starter** — ₹200/user/month
  - **Standard** — ₹250/user/month (Most Popular)
  - **Plus** — ₹300/user/month
- "Save up to 30%" badge
- Animated tab transitions with Framer Motion

### 🏆 Why Us Section
- 4 compelling reasons with icons:
  - Save 30% vs Direct pricing
  - INR Billing (UPI, NEFT, bank transfer)
  - 24-Hour Activation
  - Dedicated WhatsApp Support

### 📝 How It Works
- **3-Step Process** with numbered circle indicators and connecting line:
  1. Choose Your Plan
  2. Pay Securely
  3. Get Your Workspace

### 🤝 Our Commitment
- Transparency First (no hidden costs)
- Personalized Support (dedicated human expert)
- Security & Privacy (Google best-practice configuration)

### 📬 Contact / Lead Generation Form
- **Firebase-powered contact form** with fields for:
  - Name, Business Name, Email, Phone
  - Number of Users (dropdown: 1–5, 6–10, 11–25, 26–50, 50+)
  - Plan Interest (all Google & Zoho plans)
- **Form submission** stored in Firestore `contacts` collection
- Success/error state handling with animated feedback
- Direct contact options: WhatsApp, Email, Business Hours

### 💬 Floating WhatsApp Button
- Fixed bottom-right WhatsApp CTA with pulse animation
- Pre-filled WhatsApp message for quick engagement
- Notification badge with bounce animation

### 🦶 Footer
- Brand logo with Google-colored dots
- Quick navigation links
- Copyright notice with trademark attributions

---

## 📁 Project Structure

```
workspacebay---google-workspace-reseller/
├── index.html                    # HTML entry point with SEO meta tags
├── package.json                  # Dependencies and scripts
├── vite.config.ts                # Vite build configuration with Tailwind & React plugins
├── tsconfig.json                 # TypeScript compiler options
├── firestore.rules               # Firestore security rules (write-only contacts)
├── firebase-applet-config.json   # Firebase applet configuration
├── firebase-blueprint.json       # Firebase blueprint configuration
├── metadata.json                 # Project metadata
├── .env.example                  # Environment variable template
├── .env.local                    # Local environment variables (not committed)
├── .gitignore                    # Git ignore rules
│
├── src/
│   ├── main.tsx                  # React app entry point
│   ├── App.tsx                   # Main application (all sections/pages)
│   ├── index.css                 # Global styles, design tokens, Tailwind theme
│   ├── vite-env.d.ts             # Vite type declarations
│   │
│   ├── components/
│   │   ├── AmbientSpotlight.tsx   # Hero background glow effects
│   │   ├── FloatingDashboard.tsx  # 3D floating dashboard mockup
│   │   ├── GridBackground.tsx     # Grid pattern background wrapper
│   │   ├── HeroBackground.tsx     # Hero section background composition
│   │   ├── HeroBackgroundExample.tsx
│   │   ├── HeroBackgroundVariations.tsx
│   │   └── HeroTypography.tsx     # Animated hero headline component
│   │
│   └── lib/
│       └── firebase.ts            # Firebase initialization & Firestore config
│
└── dist/                          # Production build output
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Karanman12/google-workspace-reseller.git
   cd google-workspace-reseller
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Copy `.env.example` to `.env.local` and fill in your keys:
   ```bash
   cp .env.example .env.local
   ```

   Required variables:
   ```env
   GEMINI_API_KEY="your_gemini_api_key"

   # Firebase Configuration
   VITE_FIREBASE_API_KEY="your_firebase_api_key"
   VITE_FIREBASE_AUTH_DOMAIN="your_auth_domain"
   VITE_FIREBASE_PROJECT_ID="your_project_id"
   VITE_FIREBASE_STORAGE_BUCKET="your_storage_bucket"
   VITE_FIREBASE_MESSAGING_SENDER_ID="your_sender_id"
   VITE_FIREBASE_APP_ID="your_app_id"
   VITE_FIREBASE_FIRESTORE_DATABASE_ID="(default)"
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Type-check with TypeScript (no emit) |
| `npm run clean` | Remove dist folder and server.js |

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|---|---|---|
| **Brand Dark** | `#1B1B1B` | Primary text, dark backgrounds |
| **Solar Orange** | `#FF7120` | CTAs, accents, hover states |
| **Concrete Gray** | `#E4E4E4` | Page background |
| **Google Blue** | `#1A73E8` | Google brand accent |
| **Google Red** | `#EA4335` | Google brand accent |
| **Google Yellow** | `#FBBC04` | Google brand accent |
| **Google Green** | `#34A853` | Google brand accent, success states |

### Typography

| Font | Weight | Usage |
|---|---|---|
| **Outfit** | 400–800 | Display headings, brand name |
| **Plus Jakarta Sans** | 400–800 | Body text, paragraphs, buttons |
| **Space Grotesk** | 400–700 | Monospace labels, navigation, badges |

### Component Classes

- `.card-concrete-glass` — Semi-transparent cards with dark borders and orange hover
- `.card-flat-brutalist` — Solid white cards with dark borders
- `.btn-solar-orange` — Orange pill button with hover-to-transparent effect
- `.btn-solar-dark` — Dark pill button with hover-to-orange effect
- `.hero-grid` — Grid pattern background overlay
- `.pulse-whatsapp` — Breathing pulse animation for WhatsApp button

---

## 🔒 Firebase & Security

- **Firestore Rules**: The `contacts` collection allows **create-only** access (no read, update, or delete from client)
- **Error Handling**: Comprehensive Firestore error logging with auth context information
- **Environment Variables**: All Firebase credentials are stored in `.env.local` (not committed to git)

---

## 📱 Responsive Design

The site is fully responsive across all device sizes:
- **Desktop** (1024px+): Full-width layout with floating pill navbar
- **Tablet** (768px–1023px): Adapted grid layouts
- **Mobile** (<768px): Stacked layouts, hamburger menu, optimized touch targets

---

## 🌐 SEO

- Descriptive `<title>` tag: *"WorkspaceBays | Google Workspace & Zoho Workplace Partner India"*
- Meta description for search engine snippets
- Semantic HTML5 structure
- Proper heading hierarchy (single `<h1>` equivalent in hero)

---

## 📄 License

This project is licensed under the **Apache-2.0 License**.

---

<div align="center">

**Built with ❤️ by WorkspaceBays**

[WhatsApp](https://wa.me/919654387865) · [Email](mailto:karanmandal9654@gmail.com)

</div>
