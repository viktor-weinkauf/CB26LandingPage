/**
 * Animation configuration and easing functions
 */

// Easing Functions
export const EASING = {
  linear: (t: number) => t,
  easeInQuad: (t: number) => t * t,
  easeOutQuad: (t: number) => t * (2 - t),
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInCubic: (t: number) => t * t * t,
  easeOutCubic: (t: number) => --t * t * t + 1,
  easeInOutCubic: (t: number) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeInQuart: (t: number) => t * t * t * t,
  easeOutQuart: (t: number) => 1 - --t * t * t * t,
  easeInOutQuart: (t: number) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  easeOutElastic: (t: number) => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  },
  easeOutBounce: (t: number) => {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (t < 1 / d1) {
      return n1 * t * t;
    } else if (t < 2 / d1) {
      return n1 * (t -= 1.5 / d1) * t + 0.75;
    } else if (t < 2.5 / d1) {
      return n1 * (t -= 2.25 / d1) * t + 0.9375;
    } else {
      return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
  },
} as const;

// Animation Variants for ScrollReveal
export const REVEAL_ANIMATIONS = {
  fadeIn: 'fade-in',
  slideUp: 'slide-up',
  slideDown: 'slide-down',
  slideLeft: 'slide-in-left',
  slideRight: 'slide-in-right',
  scaleUp: 'scale-up',
  scaleDown: 'scale-down',
} as const;

// Scroll Reveal Configuration Presets
export const REVEAL_PRESETS = {
  default: {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true,
  },
  immediate: {
    threshold: 0.01,
    rootMargin: '0px',
    triggerOnce: true,
  },
  delayed: {
    threshold: 0.2,
    rootMargin: '0px 0px -150px 0px',
    triggerOnce: true,
  },
  repeat: {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: false,
  },
} as const;

// Stagger Delays (ms)
export const STAGGER_DELAY = {
  FAST: 50,
  NORMAL: 100,
  SLOW: 150,
  EXTRA_SLOW: 200,
} as const;

// Transition Durations (ms)
export const TRANSITION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  EXTRA_SLOW: 700,
} as const;
