import { useEffect, useState } from 'react';
import './Cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const animateRing = () => {
      setRingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.12,
        y: prev.y + (position.y - prev.y) * 0.12,
      }));
      // Need to use functional update to get latest position, but for simplicity
      // and performance in requestAnimationFrame, typically refs are used.
      // Let's implement with refs inside the effect.
    };

    // Correct implementation with refs for smooth animation
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const updateMousePos = (e) => {
      mx = e.clientX;
      my = e.clientY;
      setPosition({ x: mx, y: my });
    };

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      setRingPosition({ x: rx, y: ry });
      animationFrameId = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', updateMousePos);
    loop();

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-item, .tool-tag');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Observer for dynamically added elements (like reveal elements)
    const observer = new MutationObserver(() => {
      const newInteractiveElements = document.querySelectorAll('a, button, .project-item, .tool-tag');
      newInteractiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter); // prevent duplicates
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', updateMousePos);
      cancelAnimationFrame(animationFrameId);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      observer.disconnect();
    };
  }, []); // Run once on mount

  return (
    <>
      <div
        className={`cursor ${isHovering ? 'expand' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-ring ${isHovering ? 'expand' : ''}`}
        style={{ left: `${ringPosition.x}px`, top: `${ringPosition.y}px` }}
      />
    </>
  );
};

export default Cursor;
