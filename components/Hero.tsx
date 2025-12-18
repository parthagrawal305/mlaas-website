'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    const container = particlesRef.current;
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';

      const size = Math.random() * 4 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';

      const duration = Math.random() * 20 + 15;
      const delay = Math.random() * 10;
      particle.style.animationDuration = duration + 's';
      particle.style.animationDelay = delay + 's';

      container.appendChild(particle);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <header className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="hero-particles" id="particles" ref={particlesRef}></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">🔒</span>
          <span>Trusted Since 1987 • Swiss Banking Standards</span>
        </div>
        <h1 className="hero-title">
          <span className="title-line">Transform Your</span>
          <span className="title-line title-highlight">Complex Assets</span>
          <span className="title-line">Into Clean Capital</span>
        </h1>
        <p className="hero-subtitle">
          Premier asset restructuring services for distinguished clients worldwide.
          We specialize in converting unconventional financial situations into
          pristine, compliant portfolios — with absolute discretion.
        </p>
        <div className="hero-ctas">
          <Link href="#contact" className="btn btn-primary">
            <span>Start Your Transformation</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link href="#process" className="btn btn-secondary">
            <span>See How It Works</span>
          </Link>
        </div>
        <div className="hero-trust">
          <div className="trust-item">
            <span className="trust-value" data-count="37">0</span>
            <span className="trust-label">Years of Excellence</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="trust-value">$<span data-count="847">0</span>B+</span>
            <span className="trust-label">Assets Restructured</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="trust-value"><span data-count="100">0</span>%</span>
            <span className="trust-label">Client Confidentiality</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </header>
  );
}
