/**
 * Theme configuration
 * Color palette and design tokens
 */

// ChessBase Brand Colors
export const COLORS = {
  brand: {
    red: '#B51634',
    darkRed: '#8a1128',
    blue: '#0099da',
    darkBlue: '#007ab8',
  },
  neutral: {
    charcoal: '#2d2d2d',
    dark: '#1a1a1a',
    grey: '#f5f5f5',
    border: '#e0e0e0',
  },
  semantic: {
    success: '#22c55e',
    successDark: '#16a34a',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
} as const;

// Gradient Definitions
export const GRADIENTS = {
  primary: 'bg-gradient-to-r from-[#de0e1f] to-[#992721]',
  primaryHover: 'hover:from-[#d8011e] hover:to-[#d8011e]',
  blue: 'bg-gradient-to-r from-[#0099da] to-[#007ab8]',
  success: 'bg-gradient-to-r from-[#22c55e] to-[#16a34a]',
  subtle: 'bg-gradient-to-br from-gray-50 to-gray-100',
  dark: 'bg-gradient-to-br from-gray-900 to-gray-800',
} as const;

// Typography
export const TYPOGRAPHY = {
  fontFamily: {
    sans: "'Montserrat', sans-serif",
    display: "'Merriweather', serif",
    body: "'Merriweather', serif",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
} as const;

// Spacing Scale
export const SPACING = {
  section: {
    paddingY: 'py-16',
    paddingYLarge: 'py-24',
    marginBottom: 'mb-8',
    marginBottomLarge: 'mb-12',
  },
  container: {
    maxWidth: 'max-w-6xl',
    padding: 'px-4 sm:px-6 lg:px-8',
  },
  gap: {
    small: 'gap-2',
    medium: 'gap-4',
    large: 'gap-8',
    extraLarge: 'gap-12',
  },
} as const;

// Border Radius
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem',
  default: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
} as const;

// Shadows
export const SHADOWS = {
  card: 'shadow-[0_1px_3px_rgba(0,0,0,0.1)]',
  cardHover: 'shadow-[0_4px_12px_rgba(0,0,0,0.15)]',
  button: 'shadow-md',
  buttonHover: 'shadow-xl',
  large: 'shadow-2xl',
} as const;

// Dark Mode Colors
export const DARK_COLORS = {
  background: {
    primary: '#0f0f0f',
    secondary: '#1a1a1a',
    tertiary: '#2d2d2d',
  },
  text: {
    primary: '#f5f5f5',
    secondary: '#d1d1d1',
    tertiary: '#9ca3af',
  },
  border: '#374151',
} as const;

// Component-Specific Tokens
export const COMPONENTS = {
  button: {
    height: {
      small: 'h-8',
      medium: 'h-10',
      large: 'h-12',
    },
    padding: {
      small: 'px-4 py-2',
      medium: 'px-6 py-3',
      large: 'px-8 py-4',
    },
  },
  card: {
    padding: 'p-6',
    border: 'border border-gray-200',
    background: 'bg-white',
    hover: 'hover:shadow-lg transition-shadow duration-300',
  },
  input: {
    height: 'h-10',
    padding: 'px-4 py-2',
    border: 'border border-gray-300',
    focus: 'focus:border-cb-red focus:ring-2 focus:ring-cb-red/20',
  },
} as const;
