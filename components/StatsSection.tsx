export function StatsSection() {
  return (
    <section className="stats">
      <div className="stats-bg"></div>
      <div className="section-container">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-value">$<span data-count="847">0</span>B+</span>
            <span className="stat-label">Total Assets Restructured</span>
          </div>
          <div className="stat-item">
            <span className="stat-value"><span data-count="12847">0</span>+</span>
            <span className="stat-label">Successful Operations</span>
          </div>
          <div className="stat-item">
            <span className="stat-value"><span data-count="0">0</span></span>
            <span className="stat-label">Compromised Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-value"><span data-count="23">0</span></span>
            <span className="stat-label">Jurisdictions Active</span>
          </div>
        </div>
      </div>
    </section>
  );
}
