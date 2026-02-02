import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ImageLightboxProps {
  imageUrl: string;
  alt: string;
  onClose: () => void;
  enableMagnifier?: boolean;
  maxHeight?: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ imageUrl, alt, onClose, enableMagnifier = true, maxHeight = '90vh' }) => {
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [showTouchHint, setShowTouchHint] = useState(true);
  const [isPinching, setIsPinching] = useState(false);
  const lastTapRef = useRef<number>(0);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const lastPanRef = useRef({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);
  const initialPinchDistanceRef = useRef<number | null>(null);
  const lastZoomScaleRef = useRef(1);

  const isZoomed = zoomScale > 1;

  // Detect touch device
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  // Hide touch hint after animation
  useEffect(() => {
    if (isTouchDevice && showTouchHint) {
      const timer = setTimeout(() => setShowTouchHint(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isTouchDevice, showTouchHint]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Handle Escape key to close, block all other keyboard functions
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else {
        // Prevent all other keyboard interactions
        e.preventDefault();
        e.stopPropagation();
      }
    };

    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [onClose]);

  // Calculate distance between two touch points
  const getTouchDistance = (touches: React.TouchList): number => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Handle double-tap to zoom on touch devices
  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    if (!isTouchDevice || !imgRef.current) return;

    const touch = e.touches[0];

    // Handle pinch start (2 fingers)
    if (e.touches.length === 2) {
      e.preventDefault();
      setIsPinching(true);
      initialPinchDistanceRef.current = getTouchDistance(e.touches);
      lastZoomScaleRef.current = zoomScale;

      // Set zoom origin to center point between two fingers
      const rect = imgRef.current.getBoundingClientRect();
      const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      const x = ((centerX - rect.left) / rect.width) * 100;
      const y = ((centerY - rect.top) / rect.height) * 100;
      if (zoomScale === 1) {
        setZoomOrigin({ x, y });
      }
      return;
    }

    if (isZoomed) {
      // Store touch start position for panning
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
      lastPanRef.current = { ...panOffset };
    }

    // Only process double-tap detection for single-finger touches
    // Multi-touch (pinch) should not trigger double-tap
    if (e.touches.length === 1) {
      const now = Date.now();
      const DOUBLE_TAP_DELAY = 300;

      if (now - lastTapRef.current < DOUBLE_TAP_DELAY) {
        // Double tap detected
        e.preventDefault();

        if (isZoomed) {
          // Zoom out
          setZoomScale(1);
          setPanOffset({ x: 0, y: 0 });
        } else {
          // Zoom in at tap position
          const rect = imgRef.current.getBoundingClientRect();
          const x = ((touch.clientX - rect.left) / rect.width) * 100;
          const y = ((touch.clientY - rect.top) / rect.height) * 100;
          setZoomOrigin({ x, y });
          setPanOffset({ x: 0, y: 0 });
          setZoomScale(2.5);
        }
      }

      lastTapRef.current = now;
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    if (!isTouchDevice) return;

    // Handle pinch zoom (2 fingers)
    if (e.touches.length === 2 && initialPinchDistanceRef.current !== null) {
      e.preventDefault();
      const currentDistance = getTouchDistance(e.touches);
      const scale = currentDistance / initialPinchDistanceRef.current;
      const newZoom = Math.max(1, Math.min(5, lastZoomScaleRef.current * scale));
      setZoomScale(newZoom);
      return;
    }

    // Handle panning (1 finger when zoomed)
    if (!isZoomed || !touchStartRef.current) return;

    e.preventDefault();
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;

    // Limit pan to reasonable bounds based on zoom level
    const maxPan = 50 * zoomScale;
    const newX = Math.max(-maxPan, Math.min(maxPan, lastPanRef.current.x + deltaX));
    const newY = Math.max(-maxPan, Math.min(maxPan, lastPanRef.current.y + deltaY));

    setPanOffset({ x: newX, y: newY });
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
    initialPinchDistanceRef.current = null;
    setIsPinching(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!imgRef.current) return;

    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMagnifierPos({ x, y });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!imgRef.current) return;

    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMagnifierPos({ x, y });
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const magnifierSize = 350;
  const zoomLevel = 2.5;
  const shouldShowMagnifier = enableMagnifier && !isTouchDevice;

  const lightboxContent = (
    <div
      className="lightbox animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close Button */}
      <button
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close lightbox (Esc)"
        title="Close (Esc)"
      >
        ×
      </button>

      {/* Image Container */}
      <div
        className="lightbox__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lightbox__image-wrapper">
          <img
            ref={imgRef}
            src={imageUrl}
            alt={alt}
            className={`lightbox__image ${shouldShowMagnifier ? 'lightbox__image--magnifier' : ''} ${isZoomed ? 'lightbox__image--zoomed' : ''}`}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              ...(isTouchDevice && isZoomed ? {
                transform: `scale(${zoomScale}) translate(${panOffset.x / zoomScale}px, ${panOffset.y / zoomScale}px)`,
                transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
                transition: isPinching ? 'none' : 'transform 0.2s ease-out',
              } : {}),
            }}
            onMouseMove={shouldShowMagnifier ? handleMouseMove : undefined}
            onMouseEnter={shouldShowMagnifier ? handleMouseEnter : undefined}
            onMouseLeave={shouldShowMagnifier ? handleMouseLeave : undefined}
            onTouchStart={isTouchDevice ? handleTouchStart : undefined}
            onTouchMove={isTouchDevice ? handleTouchMove : undefined}
            onTouchEnd={isTouchDevice ? handleTouchEnd : undefined}
          />

          {/* Magnifying Glass */}
          {shouldShowMagnifier && showMagnifier && imgRef.current && (() => {
            const bgX = magnifierSize / 2 - magnifierPos.x * zoomLevel;
            const bgY = magnifierSize / 2 - magnifierPos.y * zoomLevel;
            return (
              <div
                className="lightbox__magnifier"
                style={{
                  width: `${magnifierSize}px`,
                  height: `${magnifierSize}px`,
                  left: `${magnifierPos.x - magnifierSize / 2}px`,
                  top: `${magnifierPos.y - magnifierSize / 2}px`,
                  backgroundImage: `url(${imageUrl})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: `${imgRef.current!.width * zoomLevel}px ${imgRef.current!.height * zoomLevel}px`,
                  backgroundPosition: `${bgX}px ${bgY}px`,
                }}
              />
            );
          })()}

          {/* Touch hint for mobile users */}
          {isTouchDevice && showTouchHint && !isZoomed && (
            <div className="lightbox__touch-hint">
              Pinch or double-tap to zoom
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(lightboxContent, document.body);
};
