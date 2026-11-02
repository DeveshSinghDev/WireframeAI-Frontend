import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import WirePoster from "../assets/wire-poster.jpg";

function Footer() {
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function fitWatermark() {
      if (svgRef.current && textRef.current) {
        try {
          const bbox = textRef.current.getBBox();
          svgRef.current.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
        } catch {
          // The fallback viewBox keeps the wordmark visible before fonts settle.
        }
      }
    }

    fitWatermark();
    if (document.fonts?.ready) {
      document.fonts.ready.then(fitWatermark);
    }

    window.addEventListener("resize", fitWatermark);
    return () => window.removeEventListener("resize", fitWatermark);
  }, []);

  const handleStart = (event) => {
    event.preventDefault();
    navigate("/signup");
  };

  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="footer-brand">
          <img className="footer-brand__image" src={WirePoster} alt="" aria-hidden="true" />
          <Link className="footer-brand__logo" to="/">
            <span className="footer-brand__mark" aria-hidden="true">W</span>
            <span className="footer-brand__name">WireframeAI</span>
          </Link>

          <div>
            <p className="footer-brand__tagline">
              Wireframes in.
              <span>React out.</span>
            </p>
            <div className="footer-socials">
              <Link className="footer-social" to="/instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </Link>
              <Link className="footer-social" to="/linkedin" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" focusable="false">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link className="footer-social" to="/twitter" aria-label="X">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" focusable="false">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-panel">
          <div className="footer-columns">
            <div className="footer-col">
              <h3>Navigation</h3>
              <Link to="/">Home</Link>
              <Link to="/features">Features</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/testimonials">Testimonials</Link>
            </div>
            <div className="footer-col">
              <h3>Company</h3>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/components">Components</Link>
              <Link to="/support">Support</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <h3>More</h3>
              <Link to="/terms">Terms</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/instagram">Instagram</Link>
              <Link to="/linkedin">LinkedIn</Link>
              <Link to="/twitter">X</Link>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">&copy; 2026 WireframeAI. All rights reserved.</span>
            <form className="footer-news" onSubmit={handleStart}>
              <h4>Ready when you are.</h4>
              <div className="footer-news__row">
                <label className="sr-only" htmlFor="footer-email">Email address</label>
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@studio.com"
                  required
                  aria-describedby="footer-news-status"
                />
                <button type="submit">Start free</button>
              </div>
              <p className="footer-news__status" id="footer-news-status">No credit card. 5 free generations.</p>
            </form>
          </div>
        </div>
      </div>

      <div className="shell site-footer__watermark" aria-hidden="true">
        <svg
          ref={svgRef}
          id="watermarkSvg"
          viewBox="62 95 876 175"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          focusable="false"
        >
          <text
            ref={textRef}
            id="watermarkText"
            x="500"
            y="240"
            textAnchor="middle"
            fontSize="320"
            className="footer-watermark__text"
          >
            WireframeAI
          </text>
        </svg>
      </div>
    </footer>
  );
}

export default Footer;
