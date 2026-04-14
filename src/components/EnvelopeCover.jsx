import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { weddingData } from '../config/weddingData';

export default function EnvelopeCover({ onOpen }) {
  const containerRef = useRef(null);
  const guestName = new URLSearchParams(window.location.search).get('name') || '';

  /* ---- GSAP Entrance Animation ---- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Background paper fades in
      tl.fromTo('.envelope-cover', { opacity: 0 }, { opacity: 1, duration: 0.6 })
        // 2. Title text drops down
        .fromTo('.ec-title', { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.3)
        // 3. Line draws from center
        .fromTo('.ec-line', { scaleX: 0 }, { scaleX: 1, duration: 0.5 }, 0.6)
        // 4. Guest name types in
        .fromTo('.ec-guest', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, 0.7)
        // 5. Envelope slides up
        .fromTo('.ec-envelope-wrap', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.4)' }, 0.8)
        // 6. Floral top-left flies in
        .fromTo('.ec-floral-tl', { x: -60, y: -40, opacity: 0, scale: 0.7 }, { x: 0, y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.2)' }, 1.0)
        // 7. Floral bottom-right flies in
        .fromTo('.ec-floral-br', { x: 60, y: 40, opacity: 0, scale: 0.7 }, { x: 0, y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.2)' }, 1.1)
        // 8. Wax seal pops in with bounce
        .fromTo('.ec-seal', { scale: 0, rotation: -90 }, { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(2.5)' }, 1.3)
        // 9. Date fades up
        .fromTo('.ec-date', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 1.5)
        // 10. Hint bounces in
        .fromTo('.ec-hint', { opacity: 0 }, { opacity: 1, duration: 0.4 }, 1.8);

      // Continuous float on floral elements
      gsap.to('.ec-floral-tl', { y: -6, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.ec-floral-br', { y: 6, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 });

      // Seal glow pulse
      gsap.to('.ec-seal', {
        filter: 'drop-shadow(0 0 12px rgba(81,93,62,0.4))',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="envelope-cover" ref={containerRef} id="envelope-cover">
      {/* Subtle floating particles */}
      <div className="ec-particles">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="ec-particle" style={{ '--i': i }} />
        ))}
      </div>

      <p className="ec-title">Trân trọng kính mời:</p>

      {guestName && (
        <p className="ec-guest">{decodeURIComponent(guestName)}</p>
      )}

      <div className="ec-line" />

      <div className="ec-envelope-wrap" onClick={onOpen} role="button" tabIndex={0} aria-label="Mở thiệp cưới">
        {/* Floral decorations positioned around envelope */}
        <img src="/images/floral-tl.png" alt="" className="ec-floral ec-floral-tl" draggable="false" />
        <img src="/images/floral-br.png" alt="" className="ec-floral ec-floral-br" draggable="false" />

        {/* Envelope body */}
        <div className="ec-envelope">
          <div className="ec-envelope__flap" />
          <div className="ec-envelope__body" />
          <div className="ec-envelope__flap-line-l" />
          <div className="ec-envelope__flap-line-r" />
        </div>

        {/* Wax Seal */}
        <img src="/images/wax-seal.png" alt="Mở thiệp" className="ec-seal" draggable="false" />
      </div>

      <p className="ec-date">{weddingData.weddingDateDisplay}</p>
      <p className="ec-hint">
        <span className="ec-hint__icon">▼</span>
        Nhấn vào thiệp để mở
      </p>
    </div>
  );
}
