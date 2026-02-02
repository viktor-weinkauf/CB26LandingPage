import React, { useState } from 'react';
import { ImageLightbox } from './ImageLightbox';

export const ConsultAI: React.FC = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <>
    <section id="consult-ai" className="consult-ai">
      <div className="consult-ai__container">
        <div className="consult-ai__header">
          <h2 className="consult-ai__title">
            Consult AI
            <div className="consult-ai__title-underline"></div>
          </h2>
          <p className="consult-ai__subtitle">
            Your AI Grandmaster Coach. Get world-class verbal explanations for any position – powered by Fritz engine intelligence.
          </p>
        </div>

        {/* Screenshot */}
        <div className="consult-ai__screenshot-wrapper">
          <div className="consult-ai__screenshot-border">
            <div
              className="consult-ai__screenshot-inner"
              onClick={() => setEnlargedImage('/ai.jpg')}
            >
              <img
                src="/ai.jpg"
                alt="Consult AI Interface"
                className="consult-ai__screenshot"
              />
              <div className="consult-ai__screenshot-overlay"></div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="consult-ai__features">
          <div className="consult-ai__feature">
            <h4 className="consult-ai__feature-title">Suggest Moves</h4>
            <p className="consult-ai__feature-text">Get candidate moves with clear explanations.</p>
          </div>
          <div className="consult-ai__feature">
            <h4 className="consult-ai__feature-title">Explain Themes</h4>
            <p className="consult-ai__feature-text">Understand strategic ideas behind positions.</p>
          </div>
          <div className="consult-ai__feature">
            <h4 className="consult-ai__feature-title">Second Opinion</h4>
            <p className="consult-ai__feature-text">Compare AI insights with your analysis.</p>
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
