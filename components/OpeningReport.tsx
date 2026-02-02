import React, { useState, useEffect } from 'react';
import { ImageLightbox } from './ImageLightbox';
import { ANIMATION_DURATION } from '../config/constants';

export const OpeningReport: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'performance' | 'fashion' | 'elo' | 'pioneer' | 'study' | 'reference'>('performance');
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const tabs = [
    { id: 'performance', label: 'Move Stats' },
    { id: 'fashion', label: 'Fashion Index' },
    { id: 'pioneer', label: 'Pioneer' },
    { id: 'elo', label: 'Elo Spread' },
    { id: 'study', label: 'Study Games' },
  ];

  // Auto-cycle through tabs
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === prev);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id as typeof prev;
      });
    }, ANIMATION_DURATION.CAROUSEL_AUTO_PLAY);
    return () => clearInterval(interval);
  }, [isPaused]);

  const imageMap: Record<string, string> = {
    performance: '/Opening-Report1.jpg',
    fashion: '/Opening-Report2.jpg',
    elo: '/Opening-Report-3.jpg',
    pioneer: '/Opening-Report-4.jpg',
    study: '/Opening-Report-5.jpg',
  };

  return (
    <section id="opening-report" className="opening-report">
      <div className="opening-report__container">
        <div className="opening-report__grid">

          {/* Text Content */}
          <div className="opening-report__content">
            <div className="opening-report__tag">
              Paradigm Shift
            </div>
            <h2 className="opening-report__title">
              Opening Report
              <div className="opening-report__title-underline"></div>
            </h2>
            <p className="opening-report__subtitle">
              Learn What Works at Your Level
            </p>
            <p className="opening-report__description">
              Stop memorizing theory you'll never use. The Opening Report shows which openings score well in <strong>your Elo range</strong> – so you learn only the variations relevant to your class.
            </p>

            <div className="opening-report__callout">
              <p className="opening-report__callout-title">Why it matters</p>
              <p className="opening-report__callout-text">
                3...Qa5 might be "best" according to Stockfish, but 3...Qd6 might score 10% better for players rated 1800-2000.
              </p>
            </div>

            <ul className="opening-report__features">
              <li className="opening-report__feature-item">
                <span className="opening-report__feature-dot"></span>
                Fashion Index: See historical trends
              </li>
              <li className="opening-report__feature-item">
                <span className="opening-report__feature-dot"></span>
                Move Preferences by rating
              </li>
              <li className="opening-report__feature-item">
                <span className="opening-report__feature-dot"></span>
                Instructive Games
              </li>
            </ul>
          </div>

          {/* Screenshot */}
          <div
            className="opening-report__screenshot-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="opening-report__screenshot-inner">
              {/* Tabs */}
              <div className="opening-report__tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id as typeof activeTab);
                      setIsPaused(true);
                    }}
                    className={`opening-report__tab ${
                      activeTab === tab.id
                        ? 'opening-report__tab--active'
                        : 'opening-report__tab--inactive'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Image */}
              <div
                className="opening-report__image-container"
                onClick={() => setEnlargedImage(imageMap[activeTab])}
              >
                <img
                  src={imageMap[activeTab]}
                  alt={`Opening Report - ${activeTab}`}
                  className="opening-report__image"
                />
                <div className="opening-report__image-overlay"></div>
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
  );
};
