import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows instantly
      if (dot.current) {
        dot.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animate = () => {
      // Ring follows with lag
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ring.current) {
        ring.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    // Hover effects on interactive elements
    const onEnter = () => {
      dot.current?.classList.add('cursor-hover');
      ring.current?.classList.add('cursor-hover');
    };

    const onLeave = () => {
      dot.current?.classList.remove('cursor-hover');
      ring.current?.classList.remove('cursor-hover');
    };

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);
    addHoverListeners();

    // Re-attach on DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}