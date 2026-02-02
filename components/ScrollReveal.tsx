import React, { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-up';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

/**
 * Wrapper component that reveals its children with animation when scrolled into view
 * Uses Intersection Observer for performance
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = '',
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold, triggerOnce: true });

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fade-in':
          return 'scroll-reveal scroll-reveal--hidden-fade';
        case 'slide-up':
          return 'scroll-reveal scroll-reveal--hidden-slide-up';
        case 'slide-in-left':
          return 'scroll-reveal scroll-reveal--hidden-slide-left';
        case 'slide-in-right':
          return 'scroll-reveal scroll-reveal--hidden-slide-right';
        case 'scale-up':
          return 'scroll-reveal scroll-reveal--hidden-scale';
        default:
          return 'scroll-reveal scroll-reveal--hidden-fade';
      }
    }

    return 'scroll-reveal scroll-reveal--visible';
  };

  return (
    <div
      ref={ref as any}
      className={`${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

interface ScrollRevealStaggerProps {
  children: ReactNode[];
  staggerDelay?: number;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-up';
  className?: string;
}

/**
 * Reveals multiple children with a stagger effect
 * Each child appears with an incremental delay
 */
export const ScrollRevealStagger: React.FC<ScrollRevealStaggerProps> = ({
  children,
  staggerDelay = 100,
  animation = 'slide-up',
  className = '',
}) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <ScrollReveal
          animation={animation}
          delay={index * staggerDelay}
          className={className}
        >
          {child}
        </ScrollReveal>
      ))}
    </>
  );
};
