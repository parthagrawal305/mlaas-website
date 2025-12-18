import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="logo-icon">◈</span>
              <span className="logo-text">MLAAS</span>
            </Link>
            <p className="footer-tagline">
              Premier Asset Restructuring Services.<br />
              Transforming financial complexity since 1987.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><Link href="#services">Asset Restructuring</Link></li>
                <li><Link href="#services">Shell Entities</Link></li>
                <li><Link href="#services">Crypto Integration</Link></li>
                <li><Link href="#services">Real Estate</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link href="#process">Our Process</Link></li>
                <li><Link href="#testimonials">Client Stories</Link></li>
                <li><Link href="#pricing">Pricing</Link></li>
                <li><Link href="#faq">FAQ</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="#">Confidentiality</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2024 MLAAS Holdings Ltd. Registered in the Cayman Islands.<br />
            <span className="footer-disclaimer">All services provided through compliant international structures.</span>
          </p>
          <div className="footer-badges">
            <span className="badge">🔒 256-bit Encrypted</span>
            <span className="badge">🌍 23 Jurisdictions</span>
            <span className="badge">✓ Zero Breaches</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
