import { weddingData } from '../config/weddingData';

export default function WeddingCalendar() {
  const { weddingMonth, weddingYear, weddingDay } = weddingData;
  const monthNames = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayHeaders = ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];

  const firstDay = new Date(weddingYear, weddingMonth - 1, 1).getDay();
  const daysInMonth = new Date(weddingYear, weddingMonth, 0).getDate();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <section className="calendar-section section" id="calendar">
      <h2 className="calendar-section__month">{monthNames[weddingMonth]}</h2>
      <div className="calendar-grid">
        {dayHeaders.map(d => (
          <div className="calendar-grid__header" key={d}>{d}</div>
        ))}
        {cells.map((day, i) => (
          <div key={i} className={`calendar-grid__day ${day === weddingDay ? 'calendar-highlight' : ''}`}>
            {day || ''}
          </div>
        ))}
      </div>
    </section>
  );
}
