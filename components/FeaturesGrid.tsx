import React, { useState } from 'react';
import { ImageLightbox } from './ImageLightbox';

interface FeatureProps {
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description, image, onClick }) => (
  <div className="feature-card">
    <div
      className={`feature-card__inner ${image ? 'feature-card__inner--clickable' : ''}`}
      onClick={onClick}
    >
      {image && (
        <div className="feature-card__image-wrapper">
          <img
            src={image}
            alt={title}
            className="feature-card__image"
          />
          <div className="feature-card__overlay"></div>
        </div>
      )}
      <div className="feature-card__content">
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__description">{description}</p>
      </div>
    </div>
  </div>
);

export const FeaturesGrid: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    {
      title: "Opening Report",
      description: "See which openings score well at your Elo – not just what engines recommend.",
      image: "/Opening-Report1.jpg"
    },
    {
      title: "Monte Carlo Analysis",
      description: "Practical winning probabilities based on thousands of rapid games.",
      image: "/MonteCarlo1.jpg"
    },
    {
      title: "Piece Path Visualization",
      description: "Visually displays the most successful paths and maneuvers for any piece on the board.",
      image: "/Piecemanouevres.jpg"
    },
    {
      title: "Consult AI",
      description: "Get verbal explanations powered by Fritz engine for any position.",
      image: "/ai.jpg"
    },
    {
      title: "Remote Engine",
      description: "Premium users get free 4-CPU remote engine analysis.",
      image: "/Engine-Management.jpg"
    },
    {
      title: "Raytracer Board",
      description: "Beautifully rendered 3D board for content creation.",
      image: "/RayTrace.jpg"
    }
  ];

  return (
    <section id="features" className="features-grid">
      <div className="features-grid__container">
        <div className="features-grid__header">
          <h2 className="features-grid__title">
            What's New in ChessBase '26
            <div className="features-grid__title-underline"></div>
          </h2>
          <p className="features-grid__subtitle">
            Powerful new features for serious chess players
          </p>
        </div>

        <div className="features-grid__grid">
          {features.map((f, index) => (
            <FeatureCard
              key={index}
              {...f}
              onClick={() => f.image && setSelectedImage(f.image)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <ImageLightbox
          imageUrl={selectedImage}
          alt="Feature Preview"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};
