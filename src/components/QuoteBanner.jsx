import { weddingData } from '../config/weddingData';

export default function QuoteBanner() {
  return (
    <div className="quote-banner" id="quote-banner">
      <img
        className="quote-banner__image"
        src="https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=400&q=80"
        alt="Decorative"
        loading="lazy"
      />
      <div className="quote-banner__text-box">
        <p className="quote-banner__text">{weddingData.content.sideQuote}</p>
      </div>
    </div>
  );
}
