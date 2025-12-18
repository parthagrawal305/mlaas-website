'use client';

import { useEffect, useState } from 'react';

export function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setHidden(true);
        document.body.style.overflow = '';
      }, 2000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Fallback
    const timeout = setTimeout(() => {
      setHidden(true);
      document.body.style.overflow = '';
    }, 3000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`} id="preloader">
      <div className="preloader-content">
        <div className="preloader-logo">MLAAS</div>
        <div className="preloader-bar">
          <div className="preloader-progress"></div>
        </div>
        <div className="preloader-text">Establishing Secure Connection...</div>
      </div>
    </div>
  );
}

