import { useEffect } from 'react';

const useReveal = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach((r) => observer.observe(r));

    return () => {
      reveals.forEach((r) => observer.unobserve(r));
    };
  }, []);
};

export default useReveal;
