import logo from './assets/logoR.png'
import pattern from './assets/pattern.png'



function Footee() {
  return (
    <>
    <footer className="mfb-footer" id="contact">
      <div className="mfb-footer__inner">
        <div className="mfb-footer__container">

          <div className="mfb-footer__row">

            {/* ── Col 1 · Brand ─────────────────────── */}
            <div className="mfb-footer__brand" data-aos="fade-up">
              <a href="#home" className="mfb-footer__brand-link" aria-label="Memento Microfinance Bank">
                
                <span className="mfb-footer__brand-name">
                  <img className="logo" src={logo}></img>
                </span>
              </a>
              <p className="mfb-footer__tagline">
                A fintech-driven microfinance bank built to help individuals, traders,
                salary earners and SMEs achieve bigger dreams across Nigeria.
              </p>
              <div className="mfb-footer__socials" aria-label="Social media">
                
              </div>
            </div>

            {/* ── Col 2 · Contact cards ──────────────── */}
            <div className="mfb-footer__cards" data-aos="fade-up" data-aos-delay="100" id="open">
              
              <div className="mfb-footer__card">
              
                <div className="mfb-footer__card-body">
                  <p className="mfb-footer__card-label">Email</p>
                  <div className="mfb-footer__card-value">
                    <a href="mailto:info@mementomfb.com">info@mementomfb.com</a>
                  </div>
                </div>
              </div>
            </div>

           <div className="mfb-footer__map-col" data-aos="fade-up" data-aos-delay="200">
    <div className="mfb-footer__card">
        <div className="mfb-footer__card-body">
            <p className="mfb-footer__card-label">📍 Head Office Address</p>
            <div className="mfb-footer__card-value">
                <a href="https://maps.google.com/?q=194+Herbert+Macaulay+Way,+Yaba,+Lagos" target="_blank" rel="noreferrer">
                    194 Herbert Macaulay Way, Yaba, Lagos
                </a>
            </div>
        </div>
    </div>
</div>

          </div>{/* /row */}

          <p className="mfb-footer__copyright">© 2026 Memento Microfinance Bank Ltd. All rights reserved.</p>

        </div>
      </div>
<img src={pattern} style={{ width: '100%', display: 'block', height: '60px', objectFit: 'cover' }} />    </footer>
    </>
  );
}

export default Footee;
