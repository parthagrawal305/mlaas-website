'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
        <div className="nav-container">
          <Link href="/" className="nav-logo" onClick={closeMobileMenu}>
            <span className="logo-icon">◈</span>
            <span className="logo-text">MLAAS</span>
          </Link>
          <ul className="nav-links">
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#process">Process</Link></li>
            <li><Link href="#testimonials">Clients</Link></li>
            <li><Link href="#faq">FAQ</Link></li>
          </ul>
          <Link href="#contact" className="nav-cta">Begin Consultation</Link>
          <button
            className={`nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
            id="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} id="mobile-menu">
        <ul className="mobile-nav-links">
          <li><Link href="#services" onClick={closeMobileMenu}>Services</Link></li>
          <li><Link href="#process" onClick={closeMobileMenu}>Process</Link></li>
          <li><Link href="#testimonials" onClick={closeMobileMenu}>Clients</Link></li>
          <li><Link href="#faq" onClick={closeMobileMenu}>FAQ</Link></li>
          <li>
            <Link href="#contact" className="mobile-cta" onClick={closeMobileMenu}>
              Begin Consultation
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

