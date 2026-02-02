import { useEffect, useState, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  easingFn?: (t: number) => number;
}

/**
 * Hook for animating number counting up
 * Uses easing functions for smooth animation
 */
export const useCountUp = (options: UseCountUpOptions) => {
  const {
    end,
    duration = 2000,
    start = 0,
    decimals = 0,
    prefix = '',
    suffix = '',
    separator = ',',
    easingFn = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t, // easeInOutQuad
  } = options;

  const [count, setCount] = useState(start);
  const [isComplete, setIsComplete] = useState(false);
  const frameRate = 1000 / 60; // 60 FPS
  const totalFrames = Math.round(duration / frameRate);
  const currentFrame = useRef(0);

  useEffect(() => {
    let animationFrame: number;

    const counter = () => {
      currentFrame.current++;
      const progress = easingFn(currentFrame.current / totalFrames);
      const currentCount = start + (end - start) * progress;

      setCount(currentCount);

      if (currentFrame.current < totalFrames) {
        animationFrame = requestAnimationFrame(counter);
      } else {
        setCount(end);
        setIsComplete(true);
      }
    };

    animationFrame = requestAnimationFrame(counter);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, start, totalFrames, easingFn]);

  const formatNumber = (num: number): string => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.split('.');

    // Add thousand separators
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);

    const formatted = parts.join('.');
    return `${prefix}${formatted}${suffix}`;
  };

  return {
    count: formatNumber(count),
    isComplete,
  };
};

/**
 * Hook to trigger count-up when element enters viewport
 */
export const useCountUpOnView = (options: UseCountUpOptions, threshold = 0.5) => {
  const [shouldStart, setShouldStart] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shouldStart) {
          setShouldStart(true);
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
  }, [threshold, shouldStart]);

  const countUpResult = useCountUp({
    ...options,
    end: shouldStart ? options.end : options.start || 0,
  });

  return {
    ref,
    ...countUpResult,
  };
};
