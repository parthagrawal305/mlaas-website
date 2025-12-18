export function SecuritySection() {
  return (
    <section className="security">
      <div className="section-container">
        <div className="security-content">
          <div className="security-text">
            <span className="section-tag">Security First</span>
            <h2 className="section-title">Uncompromising Protection</h2>
            <p>
              Our security infrastructure rivals nation-state capabilities.
              Every communication, transaction, and record is protected by
              military-grade encryption and distributed across secure jurisdictions.
            </p>
            <ul className="security-features">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>256-bit AES encryption on all communications</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>Zero-knowledge architecture — we can't expose what we don't store</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>Distributed servers across non-extradition jurisdictions</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>Automatic data destruction protocols</span>
              </li>
            </ul>
          </div>
          <div className="security-visual">
            <div className="security-shield">
              <div className="shield-ring"></div>
              <div className="shield-ring"></div>
              <div className="shield-ring"></div>
              <div className="shield-icon">🛡️</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
