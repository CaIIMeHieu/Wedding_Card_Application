import { useState } from 'react';
import { weddingData } from '../config/weddingData';

export default function GiftModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('groom');
  if (!isOpen) return null;

  const info = tab === 'groom' ? weddingData.banking.groom : weddingData.banking.bride;
  const label = tab === 'groom' ? 'Chú rể' : 'Cô dâu';

  return (
    <div className="gift-modal-overlay" onClick={onClose}>
      <div className="gift-modal" onClick={e => e.stopPropagation()}>
        <button className="gift-modal__close" onClick={onClose} aria-label="Đóng" id="gift-close">✕</button>

        <img
          className="gift-modal__image"
          src={weddingData.images.hero}
          alt="Couple"
        />

        <div className="gift-modal__tabs">
          <button
            className={`gift-modal__tab ${tab === 'groom' ? 'active' : ''}`}
            onClick={() => setTab('groom')}
            id="gift-tab-groom"
          >
            Chú rể
          </button>
          <button
            className={`gift-modal__tab ${tab === 'bride' ? 'active' : ''}`}
            onClick={() => setTab('bride')}
            id="gift-tab-bride"
          >
            Cô dâu
          </button>
        </div>

        <div className="gift-modal__content">
          <div className="gift-modal__qr">QR Code</div>
          <p className="gift-modal__label">{label}</p>
          <p className="gift-modal__name">{info.accountHolder}</p>
          <div className="gift-modal__divider" />
          <p className="gift-modal__bank">{info.bankName}</p>
          <p className="gift-modal__account">{info.accountNumber}</p>
        </div>
      </div>
    </div>
  );
}
