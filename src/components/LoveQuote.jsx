import { weddingData } from '../config/weddingData';

export default function LoveQuote() {
  return (
    <div className="love-quote section" id="love-quote">
      <img src={weddingData.images.loveQuoteBg} alt="Couple" loading="lazy" />
      <div className="love-quote__overlay">
        <p className="love-quote__text">All of me loves all of you</p>
      </div>
    </div>
  );
}
