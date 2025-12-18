'use client';

import { useEffect } from 'react';

export function ClientScripts() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href === '#' || !href) return;

      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offset = 100;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Animated counters
    const initCounters = () => {
      const counters = document.querySelectorAll('[data-count]');
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const target = parseInt(element.getAttribute('data-count') || '0');
            const duration = 2000;
            const frameDuration = 1000 / 60;
            const totalFrames = Math.round(duration / frameDuration);
            const easeOutQuad = (t: number) => t * (2 - t);

            let frame = 0;
            const counter = setInterval(() => {
              frame++;
              const progress = easeOutQuad(frame / totalFrames);
              const currentCount = Math.round(target * progress);
              element.textContent = currentCount.toLocaleString();
              if (frame === totalFrames) {
                clearInterval(counter);
                element.textContent = target.toLocaleString();
              }
            }, frameDuration);
            observer.unobserve(element);
          }
        });
      }, observerOptions);

      counters.forEach((counter) => observer.observe(counter));
    };

    // Scroll animations
    const initScrollAnimations = () => {
      const animateElements = document.querySelectorAll(
        '.service-card, .process-step, .stat-item, .testimonial-card, .pricing-card, .faq-item, .security-features li'
      );

      animateElements.forEach((el) => {
        el.classList.add('animate-on-scroll');
      });

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animated');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      animateElements.forEach((el) => observer.observe(el));
    };

    initCounters();
    initScrollAnimations();

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
}

