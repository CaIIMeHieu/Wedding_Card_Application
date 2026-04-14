import { weddingData } from '../config/weddingData';
import { useCountdown } from '../hooks/useCountdown';

const FloralDrop = () => (
  <svg viewBox="0 0 80 120" className="floral-drop">
    <g opacity="0.6">
      <circle cx="40" cy="20" r="10" fill="#E8E4D8" />
      <circle cx="32" cy="16" r="7" fill="#F0ECE0" />
      <circle cx="48" cy="16" r="7" fill="#F0ECE0" />
      <circle cx="36" cy="24" r="6" fill="#F0ECE0" />
      <circle cx="44" cy="24" r="6" fill="#F0ECE0" />
      <path d="M40,30 Q38,50 40,70 Q42,90 40,110" stroke="#8B9A7A" strokeWidth="1.5" fill="none" />
      <path d="M40,40 Q35,45 33,42" stroke="#8B9A7A" strokeWidth="1" fill="none" />
      <path d="M40,55 Q45,60 47,57" stroke="#8B9A7A" strokeWidth="1" fill="none" />
      <circle cx="40" cy="112" r="2" fill="#8B9A7A" opacity="0.4" />
    </g>
  </svg>
);

export default function Countdown() {
  const timeLeft = useCountdown(weddingData.weddingDate);
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section className="countdown-section" id="countdown">
      <FloralDrop />
      <h2 className="countdown-section__title">Countdown</h2>
      <div className="countdown-grid">
        <div className="countdown-item">
          <div className="countdown-item__number">{pad(timeLeft.days)}</div>
          <div className="countdown-item__label">Ngày</div>
        </div>
        <span className="countdown-separator">:</span>
        <div className="countdown-item">
          <div className="countdown-item__number">{pad(timeLeft.hours)}</div>
          <div className="countdown-item__label">Giờ</div>
        </div>
        <span className="countdown-separator">:</span>
        <div className="countdown-item">
          <div className="countdown-item__number">{pad(timeLeft.minutes)}</div>
          <div className="countdown-item__label">Phút</div>
        </div>
        <span className="countdown-separator">:</span>
        <div className="countdown-item">
          <div className="countdown-item__number">{pad(timeLeft.seconds)}</div>
          <div className="countdown-item__label">Giây</div>
        </div>
      </div>
    </section>
  );
}
