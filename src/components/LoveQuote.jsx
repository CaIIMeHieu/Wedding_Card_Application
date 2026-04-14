import { weddingData } from '../config/weddingData';

export default function LoveQuote() {
  return (
    <div className="love-quote" id="love-quote">
      <img src={weddingData.images.loveQuoteBg} alt="Couple" loading="lazy" />
      <div className="love-quote__overlay">
        <p className="love-quote__text">{weddingData.content.loveQuote}</p>
      </div>
    </div>
  );
}
