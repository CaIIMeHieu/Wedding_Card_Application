import { weddingData } from '../config/weddingData';

export default function EventDetails() {
  return (
    <section className="events-section section" id="events">
      {weddingData.events.map((evt, i) => (
        <div className="event-card" key={i}>
          <div className="event-card__title">{evt.title}</div>
          <p className="event-card__time-label">TỔ CHỨC VÀO LÚC</p>
          <p className="event-card__time">{evt.time}, {evt.dayOfWeek}</p>
          <div className="event-card__date-line" />
          <p className="event-card__lunar">( {evt.lunarDate} )</p>
          <p className="event-card__venue-label">Tại</p>
          <p className="event-card__venue">{evt.venue}</p>
          <p className="event-card__address">{evt.address}</p>
          <a href={evt.mapUrl} target="_blank" rel="noopener noreferrer" className="event-card__map-btn" id={`map-btn-${i}`}>
            📍 CHỈ ĐƯỜNG
          </a>
        </div>
      ))}
    </section>
  );
}
