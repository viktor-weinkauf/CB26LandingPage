import React, { useEffect, useState } from 'react';

export const ConversionPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !sessionStorage.getItem('cb26_exit_popup')) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('cb26_exit_popup', 'true');
      }
    };

    document.addEventListener('mouseleave', handleExitIntent);
    return () => document.removeEventListener('mouseleave', handleExitIntent);
  }, [hasShown]);

  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup__content">
        <button
          onClick={() => setIsOpen(false)}
          className="popup__close"
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="popup__header">
          <h3 className="popup__title">
            Expand your Chess Horizons!
          </h3>
        </div>

        <div className="popup__body">
          <p className="popup__text">
            Get ChessBase '26 today and enjoy the <strong>4-CPU remote engine</strong> included free with your Premium account.
          </p>

          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="popup__cta"
          >
            Get ChessBase '26 Now
          </a>

          <button
            onClick={() => setIsOpen(false)}
            className="popup__dismiss"
          >
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
};
