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

      tl.fromTo('.ec-title', { y: 20 }, { y: 0, opacity: 1, duration: 1 }, 0)
        .fromTo('.ec-guest', { y: 20 }, { y: 0, opacity: 1, duration: 1 }, 0.2)
        .fromTo('.ec-envelope', { y: 30 }, { y: 0, opacity: 1, duration: 1.2 }, 0.5)
        .fromTo('.ec-photo--back', { rotate: -20, y: 50 }, { rotate: -6, y: 0, opacity: 1, duration: 1 }, 1.0)
        .fromTo('.ec-photo--front', { rotate: 20, y: 50 }, { rotate: 4, y: 0, opacity: 1, duration: 1 }, 1.2)
        .fromTo('.ec-envelope-overlay', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.5)
        .fromTo('.ec-seal', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }, 1.7)
        .fromTo('.ec-floral-tl', { x: -20 }, { x: 0, opacity: 1, duration: 1 }, 2.0)
        .fromTo('.ec-floral-br', { x: 20 }, { x: 0, opacity: 1, duration: 1 }, 2.2)
        .fromTo('.ec-butterfly', { scale: 0 }, { scale: 1, opacity: 1, duration: 0.8 }, 2.5)
        .fromTo('.ec-hint', { y: 10 }, { y: 0, opacity: 1, duration: 0.8 }, 3.0);

      // Butterfly slight hover animation
      gsap.to('.ec-butterfly', {
        y: -10,
        x: 5,
        rotation: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="envelope-cover" ref={containerRef} id="envelope-cover">
      <h1 className="ec-title">Save our date</h1>
      
      {guestName && (
        <p className="ec-guest">{decodeURIComponent(guestName)}</p>
      )}

      <div className="ec-envelope-wrap" onClick={onOpen} role="button" tabIndex={0} aria-label="Mở thiệp cưới">
        {/* Open Envelope Background */}
        <div className="ec-envelope" />

        {/* Polaroid Photos */}
        <div className="ec-photos">
          <div className="ec-photo ec-photo--back">
             <img src="https://w.ladicdn.com/s500x500/6322a62f2dad980013bb5005/screenshot_1772097848-20260226092426-muwmv.png" alt="" />
          </div>
          <div className="ec-photo ec-photo--front">
             <img src="https://w.ladicdn.com/s500x500/6322a62f2dad980013bb5005/screenshot_1772097833-20260226092426-obwur.png" alt="" />
             <p className="ec-photo__date">12.03.2026</p>
          </div>
        </div>

        {/* Envelope bottom fold overlay (to make photos look like they're inside) */}
        <div className="ec-envelope-overlay" />

        {/* Wax Seal */}
        <img 
          src="https://w.ladicdn.com/s400x400/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0018_16-20251010160531-qmshd.png" 
          alt="Mở thiệp" 
          className="ec-seal" 
          draggable="false" 
        />

        {/* Floral Decorations */}
        <img 
          src="https://w.ladicdn.com/s450x550/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0017_17-20251010160529-gulgj.png" 
          alt="" 
          className="ec-floral ec-floral-tl" 
        />
        <img 
          src="https://w.ladicdn.com/s450x600/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0019_15-20251010160529-kgwqz.png" 
          alt="" 
          className="ec-floral ec-floral-br" 
        />

        {/* Butterfly */}
        <img 
          src="https://w.ladicdn.com/s350x350/6322a62f2dad980013bb5005/-20251010162901-d2ipp.png" 
          alt="" 
          className="ec-butterfly" 
        />
      </div>
      
      <div className="ec-hint">
        <span className="ec-hint__icon">▼</span>
        Nhấn vào thiệp để mở
      </div>
    </div>
  );
}
