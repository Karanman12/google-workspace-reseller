const fs = require('fs');

let lines = fs.readFileSync('src/pages/Home.jsx', 'utf8').split('\n');

const newHomeLines = [
  "import { useOutletContext } from 'react-router-dom';",
  "import SEO from '../components/seo/SEO';",
  "",
  "const Home = () => {",
  "  const { startAnimation } = useOutletContext() || { startAnimation: true };",
  "",
  "  return (",
  "    <>",
  "      <SEO title=\"WorkspaceBays | Google Workspace & Zoho Workplace Partner India\" description=\"Premium, fully-managed cloud workspace licenses at the best prices in India with 24/7 support and 24-hour setup.\" />",
  "      <Hero startAnimation={startAnimation} />",
  "      <Stats />",
  "      <Features />",
  "      <Pricing />",
  "      <WhyUs />",
  "      <HowItWorks />",
  "      <Commitment />",
  "      <Contact />",
  "    </>",
  "  );",
  "};",
  "",
  "export default Home;"
];

// Replace App
lines.splice(1187, 110, ...newHomeLines);

// Delete Footer
lines.splice(1146, 41);

// Delete Navbar
lines.splice(89, 229);

fs.writeFileSync('src/pages/Home.jsx', lines.join('\n'));
