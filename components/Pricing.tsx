import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing__container">
        <div className="pricing__header">
          <h2 className="pricing__title">
            Get ChessBase '26
            <div className="pricing__title-underline"></div>
          </h2>
          <p className="pricing__subtitle">
            The choice of World Champions
          </p>
        </div>

        <div className="pricing__grid">
          {/* Single */}
          <div className="pricing-card pricing-card--gray">
            {/* Header */}
            <div className="pricing-card__header pricing-card__header--gray">
              <p className="pricing-card__label pricing-card__label--invisible">.</p>
              <h3 className="pricing-card__name">Single</h3>
            </div>

            {/* Price */}
            <div className="pricing-card__price-section">
              <p className="pricing-card__price">€199.90</p>
              <p className="pricing-card__price-note">One-time purchase</p>
            </div>

            {/* Features */}
            <div className="pricing-card__features-section">
              <ul className="pricing-card__features">
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">ChessBase '26</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">Online Database<br />(Premium Account) <span className="pricing-card__feature-note">*</span></span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">1 Year ChessBase Premium</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--excluded">✗</span>
                  <span className="pricing-card__feature-text--excluded">Big Database 2026</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--excluded">✗</span>
                  <span className="pricing-card__feature-text--excluded">Database Updates 2026</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--excluded">✗</span>
                  <span className="pricing-card__feature-text--excluded">3x CB Magazine</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--excluded">✗</span>
                  <span className="pricing-card__feature-text--excluded">Corr Database 2026</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--excluded">✗</span>
                  <span className="pricing-card__feature-text--excluded">1000 Ducates</span>
                </li>
              </ul>

              <a
                href="https://shop.chessbase.com/en/products/chessbase_26_program_only?Ref=RF370-B93LK2YQWA"
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-card__cta pricing-card__cta--gray"
              >
                Buy Now
              </a>

              <p className="pricing-card__footer">
                Instant download • Secure payment
              </p>
            </div>
          </div>

          {/* Starter */}
          <div className="pricing-card pricing-card--blue">
            {/* Header */}
            <div className="pricing-card__header pricing-card__header--blue">
              <p className="pricing-card__label pricing-card__label--invisible">.</p>
              <h3 className="pricing-card__name">Starter</h3>
            </div>

            {/* Price */}
            <div className="pricing-card__price-section">
              <p className="pricing-card__price">€249.90</p>
              <p className="pricing-card__price-note">One-time purchase</p>
            </div>

            {/* Features */}
            <div className="pricing-card__features-section">
              <ul className="pricing-card__features">
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">ChessBase '26</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">Online Database<br />(Premium Account) <span className="pricing-card__feature-note">*</span></span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">1 Year ChessBase Premium</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">Big Database 2026</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">Database Updates 2026</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">3x CB Magazine</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--excluded">✗</span>
                  <span className="pricing-card__feature-text--excluded">Corr Database 2026</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--excluded">✗</span>
                  <span className="pricing-card__feature-text--excluded">1000 Ducates</span>
                </li>
              </ul>

              <a
                href="https://shop.chessbase.com/en/products/chessbase_26_starter_package?Ref=RF370-B93LK2YQWA"
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-card__cta pricing-card__cta--blue"
              >
                Buy Now
              </a>

              <p className="pricing-card__footer">
                Instant download • Secure payment
              </p>
            </div>
          </div>

          {/* Mega Package - Bestseller */}
          <div className="pricing-card pricing-card--red">
            {/* Header */}
            <div className="pricing-card__header pricing-card__header--red">
              <p className="pricing-card__label">Bestseller</p>
              <h3 className="pricing-card__name">Mega</h3>
            </div>

            {/* Price */}
            <div className="pricing-card__price-section">
              <p className="pricing-card__price">€349.90</p>
              <p className="pricing-card__price-note">One-time purchase</p>
            </div>

            {/* Features */}
            <div className="pricing-card__features-section">
              <ul className="pricing-card__features">
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">ChessBase '26</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">Online Database<br />(Premium Account) <span className="pricing-card__feature-note">*</span></span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">1 Year ChessBase Premium</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">Mega Database 2026</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">Database Updates 2026</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">6x CB Magazine</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--excluded">✗</span>
                  <span className="pricing-card__feature-text--excluded">Corr Database 2026</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--excluded">✗</span>
                  <span className="pricing-card__feature-text--excluded">1000 Ducates</span>
                </li>
              </ul>

              <a
                href="https://shop.chessbase.com/de/products/chessbase_26_mega_package?Ref=RF370-B93LK2YQWA"
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-card__cta pricing-card__cta--red"
              >
                Buy Now
              </a>

              <p className="pricing-card__footer">
                Instant download • Secure payment
              </p>
            </div>
          </div>

          {/* Premium */}
          <div className="pricing-card pricing-card--gold">
            {/* Header */}
            <div className="pricing-card__header pricing-card__header--gold">
              <p className="pricing-card__label pricing-card__label--invisible">.</p>
              <h3 className="pricing-card__name">Premium</h3>
            </div>

            {/* Price */}
            <div className="pricing-card__price-section">
              <p className="pricing-card__price">€499.90</p>
              <p className="pricing-card__price-note">One-time purchase</p>
            </div>

            {/* Features */}
            <div className="pricing-card__features-section">
              <ul className="pricing-card__features">
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">ChessBase '26</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">Online Database<br />(Premium Account) <span className="pricing-card__feature-note">*</span></span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">1 Year ChessBase Premium</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">Mega Database 2026</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">Database Updates 2026</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">6x CB Magazine</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">Corr Database 2026</span>
                </li>
                <li className="pricing-card__feature">
                  <span className="pricing-card__feature-icon pricing-card__feature-icon--included">✓</span>
                  <span className="pricing-card__feature-text--included">1000 Ducates</span>
                </li>
              </ul>

              <a
                href="https://shop.chessbase.com/en/products/chessbase_26_premium_package?Ref=RF370-B93LK2YQWA"
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-card__cta pricing-card__cta--gold"
              >
                Buy Now
              </a>

              <p className="pricing-card__footer">
                Instant download • Secure payment
              </p>
            </div>
          </div>
        </div>

        {/* Upgrade Note */}
        <div className="pricing__upgrade-note">
          <p className="pricing__upgrade-text">
            ChessBase 18 owner?{' '}
            <a href="https://shop.chessbase.com/de/products/chessbase_26_mega_package?Ref=RF370-B93LK2YQWA" target="_blank" rel="noopener noreferrer" className="pricing__upgrade-link">
              Check upgrade options →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
