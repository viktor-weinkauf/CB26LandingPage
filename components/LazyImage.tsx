import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
  threshold?: number;
  onClick?: () => void;
}

/**
 * Lazy-loaded image component with blur placeholder effect
 * Uses Intersection Observer for efficient loading
 */
export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholderClassName = '',
  threshold = 0.01,
  onClick,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(imgElement);
        }
      },
      { threshold }
    );

    observer.observe(imgElement);

    return () => {
      if (imgElement) {
        observer.unobserve(imgElement);
      }
    };
  }, [threshold]);

  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [isInView, src]);

  return (
    <div className={`lazy-image ${className}`} onClick={onClick}>
      {/* Placeholder with blur effect */}
      {!isLoaded && (
        <div className={`lazy-image__placeholder ${placeholderClassName}`} />
      )}

      {/* Actual Image */}
      <img
        ref={imgRef}
        src={isInView ? src : ''}
        alt={alt}
        className={`lazy-image__img ${isLoaded ? 'lazy-image__img--loaded' : 'lazy-image__img--loading'} ${className}`}
        loading="lazy"
      />
    </div>
  );
};

interface LazyBackgroundImageProps {
  src: string;
  children?: React.ReactNode;
  className?: string;
  threshold?: number;
}

/**
 * Lazy-loaded background image component
 */
export const LazyBackgroundImage: React.FC<LazyBackgroundImageProps> = ({
  src,
  children,
  className = '',
  threshold = 0.01,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = divRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [isInView, src]);

  return (
    <div
      ref={divRef}
      className={`lazy-bg ${isLoaded ? 'lazy-bg--loaded' : 'lazy-bg--loading'} ${className}`}
      style={{
        backgroundImage: isLoaded ? `url(${src})` : 'none',
      }}
    >
      {children}
    </div>
  );
};
