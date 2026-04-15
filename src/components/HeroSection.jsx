import { weddingData } from '../config/weddingData';

export default function HeroSection() {
  return (
    <section className="hero-section section" id="hero">
      <div className="ec-container">
        <h1 className="ec-title">Save our date</h1>
        
        <div className="ec-envelope-wrap">
          <div className="ec-envelope" />
          
          <div className="ec-photos">
            <div className="ec-photo ec-photo--back">
               <img src="https://w.ladicdn.com/s500x500/6322a62f2dad980013bb5005/screenshot_1772097848-20260226092426-muwmv.png" alt="" />
            </div>
            <div className="ec-photo ec-photo--front">
               <img src="https://w.ladicdn.com/s500x500/6322a62f2dad980013bb5005/screenshot_1772097833-20260226092426-obwur.png" alt="" />
               <p className="ec-photo__date">12.03.2026</p>
            </div>
          </div>

          <div className="ec-envelope-overlay" />

          <img 
            src="https://w.ladicdn.com/s400x400/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0018_16-20251010160531-qmshd.png" 
            alt="" 
            className="ec-seal" 
          />

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

          <img 
            src="https://w.ladicdn.com/s350x350/6322a62f2dad980013bb5005/-20251010162901-d2ipp.png" 
            alt="" 
            className="ec-butterfly" 
          />
        </div>
      </div>
    </section>
  );
}
