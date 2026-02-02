import React, { useState } from 'react';
import { ImageLightbox } from './ImageLightbox';
import { MagneticButton } from './MagneticButton';
import { triggerConfettiFromButton } from '../utils/confetti';
import { LINKS } from '../config/constants';

export const Hero: React.FC = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <>
    <section className="hero">
      <div className="hero__container">
        <div className="hero__grid">

          {/* Header - Badge and Title */}
          <div className="hero__header">
            <div className="hero__badge">
              New Release
            </div>

            <h1 className="hero__title">
              ChessBase '26
            </h1>
          </div>

          {/* Product Image */}
          <div className="hero__image-wrapper">
            <div
              className="hero__image-container"
              onClick={() => setEnlargedImage('/assets/CB26_Cover3D_MEGA.webp')}
            >
              <picture>
                  <source srcSet="/assets/CB26_Cover3D_MEGA.webp" type="image/webp" />
                  <img
                    src="/assets/CB26_Cover3D_MEGA.png"
                    alt="ChessBase '26 Mega Package"
                    className="hero__image"
                    fetchPriority="high"
                  />
                </picture>
            </div>
          </div>

          {/* Text Content */}
          <div className="hero__content">
            <p className="hero__subtitle">
              EXPAND YOUR CHESS HORIZONS!
            </p>

            <p className="hero__description">
              The world's leading chess database software. Now with Elo-specific Opening Reports, Monte Carlo Analysis, and AI-powered insights.
            </p>

            {/* CTAs */}
            <div className="hero__ctas">
              <MagneticButton
                href={LINKS.SHOP_MEGA_PACKAGE}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__cta-primary"
                strength={0.08}
                onClick={(e) => {
                  triggerConfettiFromButton(e as any);
                }}
              >
                Buy Mega Package – €349.90
              </MagneticButton>

              <a
                href="#features"
                className="hero__cta-secondary"
              >
                See Features
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="hero__trust">
              <div className="hero__trust-item">
                <span className="hero__trust-dot hero__trust-dot--green"></span>
                Instant Download
              </div>
              <div className="hero__trust-item">
                <span className="hero__trust-dot hero__trust-dot--blue"></span>
                1 Year Premium Included
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {enlargedImage && (
        <ImageLightbox
          imageUrl={enlargedImage}
          alt="ChessBase '26 Mega Package"
          onClose={() => setEnlargedImage(null)}
          enableMagnifier={false}
          maxHeight="95vh"
        />
      )}
    </section>
    </>
  );
};
