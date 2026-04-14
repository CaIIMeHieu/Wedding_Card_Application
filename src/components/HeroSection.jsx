import { weddingData } from '../config/weddingData';

export default function HeroSection() {
  return (
    <>
      <section className="hero-section" id="hero">
        <h1 className="hero-section__title">Save our date</h1>
        <div className="hero-envelope">
          <div className="hero-polaroid hero-polaroid--left">
            <img src={weddingData.images.polaroid1} alt="Couple photo 1" loading="lazy" />
          </div>
          <div className="hero-polaroid hero-polaroid--right">
            <img src={weddingData.images.polaroid2} alt="Couple photo 2" loading="lazy" />
          </div>
        </div>
      </section>
      <div className="hero-image">
        <img src={weddingData.images.hero} alt={`${weddingData.groom.firstName} & ${weddingData.bride.firstName}`} loading="lazy" />
      </div>
    </>
  );
}
