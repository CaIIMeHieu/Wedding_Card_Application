import { weddingData } from '../config/weddingData';

export default function CouplePortrait() {
  const { groom, bride, images } = weddingData;

  return (
    <section className="portrait-section" id="portraits">
      <div className="portrait-card">
        <div className="portrait-frame portrait-frame--left">
          <img src={images.groomPortrait} alt={groom.firstName} loading="lazy" />
        </div>
        <p className="portrait-label">Chú rể</p>
        <p className="portrait-name">{groom.firstName}</p>
      </div>
      <div className="portrait-card">
        <div className="portrait-frame portrait-frame--right">
          <img src={images.bridePortrait} alt={bride.firstName} loading="lazy" />
        </div>
        <p className="portrait-label">Cô dâu</p>
        <p className="portrait-name">{bride.firstName}</p>
      </div>
    </section>
  );
}
