import { useRef, useEffect, TouchEvent } from 'react';

interface SwipeInput {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  minSwipeDistance?: number;
}

interface SwipeOutput {
  onTouchStart: (e: TouchEvent) => void;
  onTouchMove: (e: TouchEvent) => void;
  onTouchEnd: () => void;
}

/**
 * Hook to detect swipe gestures on touch devices
 * Returns touch event handlers to attach to elements
 */
export const useSwipe = (input: SwipeInput): SwipeOutput => {
  const {
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    minSwipeDistance = 50,
  } = input;

  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const touchEndY = useRef<number>(0);

  const onTouchStart = (e: TouchEvent) => {
    touchEndX.current = 0;
    touchEndY.current = 0;
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchStartY.current) return;

    const distanceX = touchStartX.current - touchEndX.current;
    const distanceY = touchStartY.current - touchEndY.current;
    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);

    if (isHorizontalSwipe) {
      if (distanceX > minSwipeDistance && onSwipeLeft) {
        onSwipeLeft();
      }
      if (distanceX < -minSwipeDistance && onSwipeRight) {
        onSwipeRight();
      }
    } else {
      if (distanceY > minSwipeDistance && onSwipeUp) {
        onSwipeUp();
      }
      if (distanceY < -minSwipeDistance && onSwipeDown) {
        onSwipeDown();
      }
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};

/**
 * Hook to attach swipe handlers to a ref element
 */
export const useSwipeRef = <T extends HTMLElement>(input: SwipeInput) => {
  const ref = useRef<T>(null);
  const { onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, minSwipeDistance = 50 } = input;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: globalThis.TouchEvent) => {
      touchEndX = 0;
      touchEndY = 0;
      touchStartX = e.targetTouches[0].clientX;
      touchStartY = e.targetTouches[0].clientY;
    };

    const handleTouchMove = (e: globalThis.TouchEvent) => {
      touchEndX = e.targetTouches[0].clientX;
      touchEndY = e.targetTouches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (!touchStartX || !touchStartY) return;

      const distanceX = touchStartX - touchEndX;
      const distanceY = touchStartY - touchEndY;
      const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);

      if (isHorizontalSwipe) {
        if (distanceX > minSwipeDistance && onSwipeLeft) {
          onSwipeLeft();
        }
        if (distanceX < -minSwipeDistance && onSwipeRight) {
          onSwipeRight();
        }
      } else {
        if (distanceY > minSwipeDistance && onSwipeUp) {
          onSwipeUp();
        }
        if (distanceY < -minSwipeDistance && onSwipeDown) {
          onSwipeDown();
        }
      }
    };

    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchmove', handleTouchMove);
    element.addEventListener('touchend', handleTouchEnd);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, minSwipeDistance]);

  return ref;
};
