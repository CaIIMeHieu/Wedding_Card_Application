import { weddingData } from '../config/weddingData';

const LeafDivider = () => (
  <svg viewBox="0 0 120 40" className="section-divider" style={{ marginBottom: 16 }}>
    <g opacity="0.5" fill="none" stroke="#8B9A7A" strokeWidth="1.2">
      <path d="M60,35 L60,5" />
      <path d="M60,20 Q50,12 45,8" strokeLinecap="round" />
      <path d="M60,20 Q70,12 75,8" strokeLinecap="round" />
      <path d="M60,14 Q52,8 48,5" strokeLinecap="round" />
      <path d="M60,14 Q68,8 72,5" strokeLinecap="round" />
      <circle cx="60" cy="4" r="2" fill="#8B9A7A" opacity="0.4" />
    </g>
  </svg>
);

export default function OurStory() {
  return (
    <section className="story-section" id="our-story">
      <LeafDivider />
      <h2 className="story-section__title">Our story</h2>
      <p className="story-section__text">{weddingData.content.ourStory}</p>
    </section>
  );
}
