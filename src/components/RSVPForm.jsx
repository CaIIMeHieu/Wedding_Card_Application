import { useState } from 'react';
import { weddingData } from '../config/weddingData';

export default function RSVPForm({ onOpenGift }) {
  const [form, setForm] = useState({ name: '', message: '', attending: '', guests: '', side: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.attending) { setStatus('error'); return; }

    const url = weddingData.rsvp.googleScriptUrl;
    if (!url) {
      // No backend configured - just show success
      setStatus('success');
      return;
    }

    setStatus('sending');
    try {
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="rsvp-section" id="rsvp">
      <p className="rsvp-section__message">{weddingData.content.rsvpMessage}</p>

      <form className="rsvp-form" onSubmit={handleSubmit}>
        <input
          className="rsvp-field" name="name" placeholder="Tên của bạn"
          value={form.name} onChange={handleChange} required id="rsvp-name"
        />
        <textarea
          className="rsvp-field" name="message" placeholder="Gửi lời nhắn đến cô dâu chú rể"
          value={form.message} onChange={handleChange} id="rsvp-message"
        />
        <select className="rsvp-field" name="attending" value={form.attending} onChange={handleChange} id="rsvp-attending">
          <option value="">Bạn sẽ đến chứ?</option>
          {weddingData.rsvp.attendOptions.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <input
          className="rsvp-field" name="guests" type="number" min="0" placeholder="Số lượng tham dự cùng?"
          value={form.guests} onChange={handleChange} id="rsvp-guests"
        />
        <select className="rsvp-field" name="side" value={form.side} onChange={handleChange} id="rsvp-side">
          <option value="">Bạn là khách mời của ai?</option>
          {weddingData.rsvp.sideOptions.map(o => <option key={o} value={o}>{o}</option>)}
        </select>

        <button type="submit" className="rsvp-btn" disabled={status === 'sending'} id="rsvp-submit">
          {status === 'sending' ? 'ĐANG GỬI...' : 'GỬI LỜI NHẮN & XÁC NHẬN'}
        </button>

        <button type="button" className="rsvp-btn rsvp-btn--gift" onClick={onOpenGift} id="gift-btn">
          GỬI QUÀ MỪNG CƯỚI
        </button>

        {status === 'success' && (
          <div className="rsvp-status rsvp-status--success">✓ Cảm ơn bạn đã xác nhận! Hẹn gặp bạn tại tiệc cưới 💕</div>
        )}
        {status === 'error' && (
          <div className="rsvp-status rsvp-status--error">Vui lòng điền đầy đủ thông tin và thử lại.</div>
        )}
      </form>
    </section>
  );
}
