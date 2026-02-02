# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **marketing landing page** for ChessBase '26 chess software. It's a single-page React application built with Vite and TypeScript, using custom CSS with CSS variables for styling. The page showcases three main features: Elo-specific Opening Report, Monte Carlo Analysis, and ConsultAI.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Production deployment (used by Railway)
npm start
```

## Architecture

### Component Structure

- **App.tsx**: Root component that orchestrates all sections in order:
  - Navbar → Hero → FeatureCarousel → FeaturesGrid → OpeningReport → MonteCarlo → ConsultAI → ComparisonTable → Testimonials → Pricing → FAQ → Footer
  - Includes ConversionPopup and scroll-to-top button

- **Component Organization**: All components are in `/components` directory as standalone `.tsx` files (no subdirectories)

- **Component Pattern**: All components are functional React components exported as named exports (e.g., `export const Hero: React.FC = () => {...}`)

### Styling System

- **Custom CSS**: Located in `/src/styles/` directory with CSS variables for theming
- **Custom Colors** (defined as CSS variables):
  - `--cb-red`: #B51634 (primary brand color)
  - `--cb-darkred`: #8a1128
  - `--cb-blue`: #0099da (accent color)
  - `--cb-charcoal`: #2d2d2d
  - `--cb-grey`: #f5f5f5
  - `--cb-border`: #e0e0e0

- **Typography**:
  - Body: 'Montserrat'
  - Display/Headings: 'Merriweather'

- **BEM Naming**: Components use BEM-style class names (e.g., `hero__title`, `pricing-card__feature`)

### Asset Management

- **Images**: Located in both `/public` and `/assets` directories (duplicated)
- **Image References**: Use absolute paths from root (e.g., `/Opening-Report1.jpg`)
- **Assets Include**: Screenshots of ChessBase software features, logos, and chess analysis diagrams

### Environment Variables

The app expects a `GEMINI_API_KEY` environment variable:
- Set in `.env.local` for local development
- Configured in `vite.config.ts` to be available as `process.env.GEMINI_API_KEY` and `process.env.API_KEY`

### Module Resolution

- **Path Alias**: `@/*` points to repository root (configured in both `tsconfig.json` and `vite.config.ts`)
- **Import Maps**: `index.html` includes import maps for CDN-hosted React, react-dom, recharts, and lucide-react

## Key Technical Details

### Vite Configuration

- Dev server runs on port 3000 with host '0.0.0.0'
- React plugin enabled
- Environment variables are injected at build time via `define`

### TypeScript Configuration

- Target: ES2022
- Module: ESNext with bundler resolution
- JSX: react-jsx
- experimentalDecorators enabled
- noEmit: true (Vite handles compilation)

### Deployment

- Configured for Railway deployment (see `railway.json` and `nixpacks.toml`)
- Production uses `serve` package to serve the built `/dist` directory
- Port is dynamically set via `$PORT` environment variable

## Component Patterns

### Interactive Components

Several components use state for interactivity:
- **OpeningReport**: Tab navigation to switch between different feature screenshots
- **MonteCarlo**: Tab navigation similar to OpeningReport
- **FeatureCarousel**: Likely includes carousel/slider functionality
- **ConversionPopup**: Popup/modal for conversion actions
- **FAQ**: Accordion-style Q&A sections

### External Links

Components contain links to:
- ChessBase shop (https://shop.chessbase.com)
- Feature anchor links for navigation (e.g., `#features`, `#pricing`)

## Important Notes

- This is a **static marketing page** with no backend API calls (despite GEMINI_API_KEY references)
- No routing library - single-page design with anchor link navigation
- No state management library - uses local React state only
- Production build is completely static and can be served from any static host
