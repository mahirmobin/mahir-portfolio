import { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [phase, setPhase] = useState('logo'); // 'logo' → 'open' → done

  useEffect(() => {
    // Phase 1: Show logo for 1.5s
    const logoTimer = setTimeout(() => setPhase('open'), 1500);
    // Phase 2: Let the split animation play (1s), then unmount
    const doneTimer = setTimeout(() => onComplete(), 2500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div className={`loader-overlay ${phase === 'open' ? 'is-opening' : ''}`}>
      <div className="loader-half loader-top"></div>
      <div className="loader-half loader-bottom"></div>
      <div className="loader-logo">
        <span className="loader-mm">MM<span>.</span></span>
        <span className="loader-sub">Portfolio</span>
      </div>
    </div>
  );
};

export default Loader;
