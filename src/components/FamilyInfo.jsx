import { weddingData } from '../config/weddingData';

export default function FamilyInfo() {
  const { groom, bride, content } = weddingData;

  return (
    <section className="family-section section" id="family">
      <div className="family-columns">
        <div className="family-side">
          <p className="family-side__label">Nhà Trai</p>
          <p className="family-side__parent">Ông. {groom.fatherName}</p>
          <p className="family-side__parent">Bà. {groom.motherName}</p>
        </div>
        <div className="family-side">
          <p className="family-side__label">Nhà Gái</p>
          <p className="family-side__parent">Ông. {bride.fatherName}</p>
          <p className="family-side__parent">Bà. {bride.motherName}</p>
        </div>
      </div>

      <p className="family-section__invitation">{content.invitation}</p>

      <div className="couple-names">
        <p className="couple-names__groom">{groom.firstName}</p>
        <span className="couple-names__and">&amp;</span>
        <p className="couple-names__bride">{bride.firstName}</p>
      </div>
    </section>
  );
}
