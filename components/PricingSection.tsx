import Link from 'next/link';

export function PricingSection() {
  return (
    <section className="pricing" id="pricing">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Investment</span>
          <h2 className="section-title">Transparent Fee Structure</h2>
          <p className="section-subtitle">
            Our fees are a small price for peace of mind. Volume discounts
            available for recurring clients.
          </p>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-tier">Starter</h3>
              <p className="pricing-desc">For emerging needs</p>
            </div>
            <div className="pricing-amount">
              <span className="amount-value">8-12%</span>
              <span className="amount-label">of restructured assets</span>
            </div>
            <ul className="pricing-features">
              <li>Up to $10M capacity</li>
              <li>3 jurisdiction layers</li>
              <li>Standard processing (4-6 weeks)</li>
              <li>Email support</li>
              <li>Basic documentation package</li>
            </ul>
            <Link href="#contact" className="btn btn-secondary btn-full">Get Started</Link>
          </div>
          <div className="pricing-card pricing-featured">
            <div className="pricing-badge">Most Popular</div>
            <div className="pricing-header">
              <h3 className="pricing-tier">Enterprise</h3>
              <p className="pricing-desc">For serious operators</p>
            </div>
            <div className="pricing-amount">
              <span className="amount-value">5-8%</span>
              <span className="amount-label">of restructured assets</span>
            </div>
            <ul className="pricing-features">
              <li>$10M - $500M capacity</li>
              <li>7+ jurisdiction layers</li>
              <li>Priority processing (2-4 weeks)</li>
              <li>Dedicated account manager</li>
              <li>Premium documentation + audit defense</li>
              <li>Quarterly restructuring reviews</li>
            </ul>
            <Link href="#contact" className="btn btn-primary btn-full">Contact Sales</Link>
          </div>
          <div className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-tier">Sovereign</h3>
              <p className="pricing-desc">For the distinguished</p>
            </div>
            <div className="pricing-amount">
              <span className="amount-value">Custom</span>
              <span className="amount-label">negotiated rates</span>
            </div>
            <ul className="pricing-features">
              <li>$500M+ capacity</li>
              <li>Unlimited jurisdiction layers</li>
              <li>White-glove concierge service</li>
              <li>Private banking introductions</li>
              <li>Legal defense retainer included</li>
              <li>Family office integration</li>
              <li>Generational wealth planning</li>
            </ul>
            <Link href="#contact" className="btn btn-secondary btn-full">Private Inquiry</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
