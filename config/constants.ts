/**
 * Application-wide constants
 * Centralizes magic numbers and repeated values
 */

// Animation Durations (ms)
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  EXTRA_SLOW: 700,
  CAROUSEL_AUTO_PLAY: 6000,
} as const;

// Scroll & Intersection
export const SCROLL = {
  REVEAL_THRESHOLD: 0.1,
  REVEAL_ROOT_MARGIN: '0px 0px -100px 0px',
  TOP_BUTTON_SHOW_OFFSET: 400,
  STATS_COUNT_UP_THRESHOLD: 0.5,
} as const;

// Touch & Swipe
export const TOUCH = {
  MIN_SWIPE_DISTANCE: 50,
  LONG_PRESS_DURATION: 500,
} as const;

// Magnetic Button
export const MAGNETIC = {
  MAX_MOVEMENT: 15,
  STRENGTH: 0.3,
} as const;

// Image Lightbox
export const LIGHTBOX = {
  MAGNIFIER_SIZE: 350,
  MAGNIFIER_ZOOM: 2.5,
  MAX_HEIGHT: '95vh',
} as const;

// Pricing
export const PRICING = {
  MEGA_PACKAGE_PRICE: '€349.90',
  STANDARD_PRICE: '€199.90',
  UPGRADE_PRICE: '€149.90',
  PREMIUM_DURATION_MONTHS: 12,
} as const;

// Testimonials
export const TESTIMONIALS = {
  AUTO_SCROLL_INTERVAL: 8000,
  TRANSITION_DURATION: 500,
} as const;

// Stats
export const STATS = {
  YEARS_OF_EXCELLENCE: 35,
  GAMES_IN_DATABASE: 10000000,
  USERS_WORLDWIDE: 500000,
} as const;

// External Links
export const LINKS = {
  SHOP_MEGA_PACKAGE: 'https://shop.chessbase.com/de/products/chessbase_26_mega_package?Ref=RF370-B93LK2YQWA',
  SHOP_STANDARD: 'https://shop.chessbase.com/de/products/chessbase_26?Ref=RF370-B93LK2YQWA',
  SHOP_UPGRADE: 'https://shop.chessbase.com/de/products/chessbase_26_upgrade?Ref=RF370-B93LK2YQWA',
  CHESSBASE_WEBSITE: 'https://www.chessbase.com',
} as const;

// Z-Index Layers
export const Z_INDEX = {
  BACKGROUND: 0,
  CONTENT: 10,
  STICKY: 20,
  NAVBAR: 30,
  POPUP: 40,
  LIGHTBOX: 50,
  TOAST: 60,
} as const;

// Breakpoints
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Performance
export const PERFORMANCE = {
  DEBOUNCE_DELAY: 150,
  THROTTLE_DELAY: 100,
  LAZY_LOAD_THRESHOLD: 0.01,
} as const;
