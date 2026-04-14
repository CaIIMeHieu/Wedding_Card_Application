import { weddingData } from '../config/weddingData';

const icons = {
  champagne: (
    <svg viewBox="0 0 64 64" width="48" height="48">
      <g opacity="0.85">
        {/* Champagne tower */}
        <rect x="26" y="44" width="12" height="4" rx="1" fill="#D4C5A9" />
        <rect x="22" y="36" width="20" height="4" rx="1" fill="#D4C5A9" />
        <rect x="18" y="28" width="28" height="4" rx="1" fill="#D4C5A9" />
        <rect x="29" y="48" width="6" height="8" rx="1" fill="#B8A88A" />
        <rect x="24" y="56" width="16" height="3" rx="1" fill="#B8A88A" />
        {/* Glasses */}
        <circle cx="32" cy="32" r="3" fill="none" stroke="#E8D5B8" strokeWidth="1" />
        <circle cx="26" cy="40" r="2.5" fill="none" stroke="#E8D5B8" strokeWidth="1" />
        <circle cx="38" cy="40" r="2.5" fill="none" stroke="#E8D5B8" strokeWidth="1" />
      </g>
    </svg>
  ),
  bouquet: (
    <svg viewBox="0 0 64 64" width="48" height="48">
      <g opacity="0.85">
        {/* Stems */}
        <line x1="32" y1="36" x2="32" y2="56" stroke="#8B9A7A" strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="38" x2="26" y2="52" stroke="#8B9A7A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="36" y1="38" x2="38" y2="52" stroke="#8B9A7A" strokeWidth="1.5" strokeLinecap="round" />
        {/* Flowers */}
        <circle cx="32" cy="22" r="8" fill="#F5F0E8" stroke="#E8E0D0" strokeWidth="1" />
        <circle cx="24" cy="28" r="6" fill="#F5F0E8" stroke="#E8E0D0" strokeWidth="1" />
        <circle cx="40" cy="28" r="6" fill="#F5F0E8" stroke="#E8E0D0" strokeWidth="1" />
        <circle cx="28" cy="18" r="5" fill="#FDFCF8" stroke="#E8E0D0" strokeWidth="1" />
        <circle cx="36" cy="18" r="5" fill="#FDFCF8" stroke="#E8E0D0" strokeWidth="1" />
        {/* Center dots */}
        <circle cx="32" cy="22" r="2" fill="#D4C5A9" />
        <circle cx="24" cy="28" r="1.5" fill="#D4C5A9" />
        <circle cx="40" cy="28" r="1.5" fill="#D4C5A9" />
        {/* Ribbon */}
        <path d="M28,42 Q32,38 36,42" stroke="#B8A88A" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  ),
};

export default function Timeline() {
  return (
    <section className="timeline-section" id="timeline">
      <h2 className="timeline-section__title">Timeline</h2>
      <div className="timeline-items">
        {weddingData.timeline.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-item__icon">{icons[item.icon] || '📌'}</div>
            <p className="timeline-item__time">{item.time}</p>
            <p className="timeline-item__label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
