export function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Our Expertise</span>
          <h2 className="section-title">Comprehensive Asset Solutions</h2>
          <p className="section-subtitle">
            Every financial situation is unique. Our suite of services covers
            the complete spectrum of asset restructuring needs.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card service-featured">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="service-title">Multi-Layer Asset Restructuring</h3>
            <p className="service-desc">
              Our signature process involves strategic placement through multiple
              jurisdictions and entities, creating an impenetrable structure that
              transforms asset origins while maintaining full accessibility.
            </p>
            <ul className="service-features">
              <li>7+ jurisdictional layers</li>
              <li>Custom entity architecture</li>
              <li>Complete audit trail elimination</li>
            </ul>
            <span className="service-tag">Most Popular</span>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M9 9h6v6H9z"/>
              </svg>
            </div>
            <h3 className="service-title">Shell Entity Formation</h3>
            <p className="service-desc">
              Rapid establishment of legitimate corporate structures across
              favorable jurisdictions. Each entity is fully compliant and
              indistinguishable from standard business operations.
            </p>
            <ul className="service-features">
              <li>23 jurisdiction options</li>
              <li>48-hour formation</li>
              <li>Nominee directors included</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3 className="service-title">Cryptocurrency Integration</h3>
            <p className="service-desc">
              Advanced blockchain solutions for the modern client. Our proprietary
              mixing protocols and DeFi strategies ensure complete transaction
              privacy while converting to traditional currency.
            </p>
            <ul className="service-features">
              <li>Tumbling & mixing services</li>
              <li>Privacy coin conversion</li>
              <li>Chain-hopping protocols</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21h18M5 21V7l8-4 8 4v14"/>
                <path d="M9 21v-6h6v6"/>
              </svg>
            </div>
            <h3 className="service-title">Real Estate Integration</h3>
            <p className="service-desc">
              Convert holdings into legitimate property portfolios across
              prime global markets. All transactions structured for maximum
              opacity with genuine property appreciation.
            </p>
            <ul className="service-features">
              <li>Global property network</li>
              <li>Anonymous purchasing</li>
              <li>Rental income streams</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
              </svg>
            </div>
            <h3 className="service-title">Cash Business Integration</h3>
            <p className="service-desc">
              Strategic placement through our network of cash-intensive
              businesses. Your funds seamlessly blend with legitimate
              revenue streams, emerging fully documented.
            </p>
            <ul className="service-features">
              <li>200+ business network</li>
              <li>POS integration</li>
              <li>Full documentation</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
              </svg>
            </div>
            <h3 className="service-title">International Wire Solutions</h3>
            <p className="service-desc">
              Complex international transfer routing through correspondent
              banking networks. Break down large sums into untraceable
              micro-transactions across multiple currencies.
            </p>
            <ul className="service-features">
              <li>47 banking partners</li>
              <li>Smurfing protocols</li>
              <li>Currency arbitrage</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
