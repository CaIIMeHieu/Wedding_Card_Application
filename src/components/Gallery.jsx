import { useState, useEffect } from 'react';
import { weddingData } from '../config/weddingData';

export default function Gallery() {
  const { gallery } = weddingData.images;
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i === 0 ? gallery.length - 1 : i - 1));
  const next = () => setCurrent(i => (i === gallery.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-main">
        <img src={gallery[current]} alt={`Gallery ${current + 1}`} key={current} loading="lazy" />
        <button className="gallery-nav gallery-nav--prev" onClick={prev} aria-label="Previous">‹</button>
        <button className="gallery-nav gallery-nav--next" onClick={next} aria-label="Next">›</button>
      </div>
      <div className="gallery-thumbs">
        {gallery.map((src, i) => (
          <img key={i} src={src} alt={`Thumb ${i + 1}`}
            className={`gallery-thumb ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)} loading="lazy" />
        ))}
      </div>
    </section>
  );
}
