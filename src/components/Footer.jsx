import { weddingData } from '../config/weddingData';

export default function Footer() {
  return (
    <footer className="footer-section" id="footer">
      <p className="footer-section__thanks">Thank you!</p>
      <p className="footer-section__names">
        {weddingData.groom.firstName} & {weddingData.bride.firstName}
      </p>
      <p className="footer-section__credit">
        {weddingData.weddingDateDisplay}
      </p>
    </footer>
  );
}
