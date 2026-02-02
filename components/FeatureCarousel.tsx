import React, { useState, useEffect, useRef } from 'react';
import { ImageLightbox } from './ImageLightbox';
import { useSwipeRef } from '../hooks/useSwipe';
import { ANIMATION_DURATION } from '../config/constants';

interface FeatureSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  mediaUrl: string;
  alt: string;
}

const features: FeatureSlide[] = [
  {
    id: 1,
    title: "Learn What Works at Your Level",
    subtitle: "Opening Report by Elo",
    description: "ChessBase '26 shows which openings score well in your Elo range – so you practice only the variations relevant to your playing class, not just what engines recommend.",
    mediaUrl: "/Opening-Report1.jpg",
    alt: "Opening Report Interface"
  },
  {
    id: 2,
    title: "A First-Class Alternative to Engine Analysis",
    subtitle: "Monte Carlo Analysis",
    description: "Instead of a single score like +0.5, Monte Carlo runs thousands of rapid games to show practical winning probabilities. Essential for sharp, complex positions where traditional scores can be misleading.",
    mediaUrl: "/MonteCarlo1.jpg",
    alt: "Monte Carlo Analysis"
  },
  {
    id: 3,
    title: "Supercomputer on Demand",
    subtitle: "Free Remote Engine for Premium Users",
    description: "Premium users get free analysis on a powerful 4-CPU remote server. Need even more power? Rent real supercomputers for just a few ducats per hour.",
    mediaUrl: "/Engine-Management.jpg",
    alt: "Engine Management"
  },
  {
    id: 4,
    title: "Your AI Grandmaster Coach",
    subtitle: "Consult AI powered by Fritz",
    description: "Get world-class verbal explanations for any position. Ask for candidate moves, strategic themes, or a second opinion – powered by Fritz engine intelligence.",
    mediaUrl: "/ai.jpg",
    alt: "Consult AI Interface"
  }
];

export const FeatureCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    setIsPaused(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
    setIsPaused(true);
  };

  const handleGoToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
  };

  // Swipe gesture support
  const swipeRef = useSwipeRef<HTMLDivElement>({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrev,
  });

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, ANIMATION_DURATION.CAROUSEL_AUTO_PLAY);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="feature-carousel">
      <div className="feature-carousel__container">
        <div className="feature-carousel__header">
          <h2 className="feature-carousel__title">
            Feature Spotlight
            <div className="feature-carousel__title-underline"></div>
          </h2>
          <div className="feature-carousel__nav">
            <button
              onClick={handlePrev}
              className="feature-carousel__nav-btn"
              aria-label="Previous feature"
              title="Previous"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="feature-carousel__nav-btn"
              aria-label="Next feature"
              title="Next"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={swipeRef}
          role="region"
          aria-label="Feature carousel"
          aria-roledescription="carousel"
          className="feature-carousel__wrapper"
        >
          <div
            className="feature-carousel__inner"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div key={currentIndex} className="feature-carousel__slide" role="group" aria-roledescription="slide" aria-label={`${currentIndex + 1} of ${features.length}`}>
              {/* Media Side */}
              <div
                className="feature-carousel__media"
                onClick={() => setEnlargedImage(features[currentIndex].mediaUrl)}
              >
                <img
                  src={features[currentIndex].mediaUrl}
                  alt={features[currentIndex].alt}
                  className="feature-carousel__media-img"
                />
                <div className="feature-carousel__media-overlay"></div>
              </div>

              {/* Text Side */}
              <div className="feature-carousel__content">
                <p className="feature-carousel__subtitle">{features[currentIndex].subtitle}</p>
                <h3 className="feature-carousel__slide-title">
                  {features[currentIndex].title}
                </h3>
                <p className="feature-carousel__description">
                  {features[currentIndex].description}
                </p>

                {/* Dots */}
                <div className="feature-carousel__dots" role="tablist" aria-label="Carousel navigation">
                  {features.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleGoToSlide(idx)}
                      role="tab"
                      aria-selected={idx === currentIndex}
                      aria-label={`Go to slide ${idx + 1}: ${features[idx].subtitle}`}
                      className={`feature-carousel__dot ${
                        idx === currentIndex ? 'feature-carousel__dot--active' : 'feature-carousel__dot--inactive'
                      }`}
                    />
                  ))}
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
          alt="Feature Preview"
          onClose={() => setEnlargedImage(null)}
        />
      )}
    </section>
  );
};
