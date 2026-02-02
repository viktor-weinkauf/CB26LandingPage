import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer__main">
        <div className="footer__grid">

          {/* Brand Column */}
          <div className="footer__brand">
            <img
              src="/assets/CBLogoShadow.svg"
              alt="ChessBase"
              className="footer__logo"
            />
            <p className="footer__tagline">
              The world's leading chess database software since 1987.
            </p>
          </div>

          {/* Products */}
          <div className="footer__column">
            <h4 className="footer__column-title">Products</h4>
            <ul className="footer__links">
              <li>
                <a href="https://shop.chessbase.com?Ref=RF370-B93LK2YQWA" target="_blank" rel="noopener noreferrer" className="footer__link">
                  ChessBase Shop
                </a>
              </li>
              <li>
                <a href="https://database.chessbase.com" target="_blank" rel="noopener noreferrer" className="footer__link">
                  Online Database
                </a>
              </li>
              <li>
                <a href="https://play.chessbase.com" target="_blank" rel="noopener noreferrer" className="footer__link">
                  Playchess.com
                </a>
              </li>
              <li>
                <a href="https://fritz.chessbase.com" target="_blank" rel="noopener noreferrer" className="footer__link">
                  Fritz Online
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer__column">
            <h4 className="footer__column-title">Resources</h4>
            <ul className="footer__links">
              <li>
                <a href="https://en.chessbase.com" target="_blank" rel="noopener noreferrer" className="footer__link">
                  News
                </a>
              </li>
              <li>
                <a href="https://shop.chessbase.com/en/sta/aboutChessBase" target="_blank" rel="noopener noreferrer" className="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="https://shop.chessbase.com/en/sta/impressum" target="_blank" rel="noopener noreferrer" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer__column">
            <h4 className="footer__column-title">Legal</h4>
            <ul className="footer__links">
              <li>
                <a href="https://shop.chessbase.com/en/sta/agb" target="_blank" rel="noopener noreferrer" className="footer__link">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="https://en.chessbase.com/pages/security" target="_blank" rel="noopener noreferrer" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://shop.chessbase.com/en/sta/faq" target="_blank" rel="noopener noreferrer" className="footer__link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="https://foss.chessbase.com/#Shop" target="_blank" rel="noopener noreferrer" className="footer__link">
                  Licenses
                </a>
              </li>
              <li>
                <a href="https://shop.chessbase.com/en/sta/accessibility" target="_blank" rel="noopener noreferrer" className="footer__link">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <div className="footer__bottom-content">
            <p className="footer__copyright">© {new Date().getFullYear()} ChessBase GmbH. All rights reserved.</p>
            <p className="footer__location">Hamburg, Germany</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
