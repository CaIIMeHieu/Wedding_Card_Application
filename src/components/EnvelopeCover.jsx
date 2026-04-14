import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { weddingData } from '../config/weddingData';

export default function EnvelopeCover({ onOpen }) {
  const containerRef = useRef(null);
  const guestName = new URLSearchParams(window.location.search).get('name') || '';

  /* ---- GSAP Entrance Animation ---- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out', opacity: 0 } });

      // Match the staggered fadeInUp from original
      tl.fromTo('.ec-title', { y: 20 }, { y: 0, opacity: 1, duration: 1 }, 0)
        .fromTo('.ec-guest', { y: 20 }, { y: 0, opacity: 1, duration: 1 }, 0.2)
        .fromTo('.ec-line', { scaleX: 0 }, { scaleX: 1, opacity: 0.5, duration: 1 }, 0.4)
        .fromTo('.ec-envelope', { y: 30 }, { y: 0, opacity: 1, duration: 1.2 }, 1.0)
        .fromTo('.ec-seal', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }, 1.3)
        .fromTo('.ec-floral-tl', { y: 20 }, { y: 0, opacity: 1, duration: 1 }, 1.5)
        .fromTo('.ec-floral-br', { y: 20 }, { y: 0, opacity: 1, duration: 1 }, 1.6)
        .fromTo('.ec-date', { y: 20 }, { y: 0, opacity: 1, duration: 1 }, 1.8)
        .fromTo('.ec-hint', { y: 10 }, { y: 0, opacity: 1, duration: 0.8 }, 2.2);

      // Wax seal pulse animation (as observed)
      gsap.to('.ec-seal', {
        scale: 1.05,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="envelope-cover" ref={containerRef} id="envelope-cover">
      <p className="ec-title">TRÂN TRỌNG KÍNH MỜI</p>
      
      {guestName && (
        <p className="ec-guest">{decodeURIComponent(guestName)}</p>
      )}

      <div className="ec-line" />

      <div className="ec-envelope-wrap" onClick={onOpen} role="button" tabIndex={0} aria-label="Mở thiệp cưới">
        {/* Envelope Body (Image) */}
        <div className="ec-envelope" />

        {/* Wax Seal (Image) */}
        <img 
          src="https://w.ladicdn.com/s400x400/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0030_4-20251010171938-qfleq.png" 
          alt="Mở thiệp" 
          className="ec-seal" 
          draggable="false" 
        />

        {/* Floral decorations exactly as positioned in CSS */}
        <img 
          src="https://w.ladicdn.com/s450x500/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0028_6-20251010171938-olp-t.png" 
          alt="" 
          className="ec-floral ec-floral-tl" 
          draggable="false" 
        />
        <img 
          src="https://w.ladicdn.com/s500x650/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0029_5-20251010171938-3wx4g.png" 
          alt="" 
          className="ec-floral ec-floral-br" 
          draggable="false" 
        />
      </div>

      <p className="ec-date">12.03.2026</p>
      
      <div className="ec-hint">
        <span className="ec-hint__icon">▼</span>
        Nhấn vào thiệp để mở
      </div>
    </div>
  );
}
