import { weddingData } from '../config/weddingData';

export default function OurStory() {
  return (
    <section className="story-section section" id="our-story">
      <div className="story-portraits">
        <div className="story-portrait">
          <div className="portrait-frame">
            <img src={weddingData.images.groomPortrait} alt="Chú rể" />
          </div>
          <p className="portrait-side">tuấn dương - Chú rể</p>
        </div>
        <div className="story-portrait">
          <div className="portrait-frame">
            <img src={weddingData.images.bridePortrait} alt="Cô dâu" />
          </div>
          <p className="portrait-side">tuyết nhung - Cô dâu</p>
        </div>
      </div>
      <p className="story-section__text">{weddingData.content.ourStory}</p>
    </section>
  );
}
