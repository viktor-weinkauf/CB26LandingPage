import React, { useState } from 'react';
import { ImageLightbox } from './ImageLightbox';

export const MonteCarlo: React.FC = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <>
    <section className="monte-carlo">
      <div className="monte-carlo__container">
        <div className="monte-carlo__grid">

          {/* Screenshots */}
          <div className="monte-carlo__screenshots">
            <div className="monte-carlo__image-wrapper">
              <div
                className="monte-carlo__image-inner"
                onClick={() => setEnlargedImage('/MonteCarlo1.jpg')}
              >
                <img
                  src="/MonteCarlo1.jpg"
                  alt="Monte Carlo Analysis"
                  className="monte-carlo__image"
                />
                <div className="monte-carlo__image-overlay"></div>
              </div>
            </div>
            <div className="monte-carlo__image-wrapper">
              <div
                className="monte-carlo__image-inner"
                onClick={() => setEnlargedImage('/Piecemanouevres.jpg')}
              >
                <img
                  src="/Piecemanouevres.jpg"
                  alt="Piece Path Visualization"
                  className="monte-carlo__image"
                />
                <div className="monte-carlo__image-overlay"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="monte-carlo__content">
            <h2 className="monte-carlo__title">
              Monte Carlo Analysis
              <div className="monte-carlo__title-underline"></div>
            </h2>
            <p className="monte-carlo__subtitle">
              A First-Class Alternative to Engine Evaluation
            </p>
            <p className="monte-carlo__description">
              Instead of a single score like +0.5, Monte Carlo runs thousands of rapid games to show you <strong>practical winning probabilities</strong> (e.g., "White wins 65%"). Essential for sharp, complex positions.
            </p>

            <div className="monte-carlo__features">
              <div className="monte-carlo__feature">
                <div className="monte-carlo__feature-number">
                  1
                </div>
                <div className="monte-carlo__feature-content">
                  <p className="monte-carlo__feature-title">Practical Chances</p>
                  <p className="monte-carlo__feature-text">Real winning probabilities, not abstract centipawn scores.</p>
                </div>
              </div>

              <div className="monte-carlo__feature">
                <div className="monte-carlo__feature-number">
                  2
                </div>
                <div className="monte-carlo__feature-content">
                  <p className="monte-carlo__feature-title">Piece Path Visualization</p>
                  <p className="monte-carlo__feature-text">Click any piece to see its most successful maneuvers.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {enlargedImage && (
        <ImageLightbox
          imageUrl={enlargedImage}
          alt="Enlarged preview"
          onClose={() => setEnlargedImage(null)}
        />
      )}
    </section>
    </>
  );
};
