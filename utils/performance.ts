/**
 * Performance monitoring utilities
 * Tracks Web Vitals and page performance metrics
 */

export interface PerformanceMetrics {
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  fcp?: number; // First Contentful Paint
  ttfb?: number; // Time to First Byte
}

/**
 * Log performance metric
 */
const logMetric = (name: string, value: number, rating: 'good' | 'needs-improvement' | 'poor') => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${name}: ${value.toFixed(2)}ms - ${rating}`);
  }
};

/**
 * Get rating for LCP (Largest Contentful Paint)
 */
const getLCPRating = (value: number): 'good' | 'needs-improvement' | 'poor' => {
  if (value <= 2500) return 'good';
  if (value <= 4000) return 'needs-improvement';
  return 'poor';
};

/**
 * Get rating for FID (First Input Delay)
 */
const getFIDRating = (value: number): 'good' | 'needs-improvement' | 'poor' => {
  if (value <= 100) return 'good';
  if (value <= 300) return 'needs-improvement';
  return 'poor';
};

/**
 * Get rating for CLS (Cumulative Layout Shift)
 */
const getCLSRating = (value: number): 'good' | 'needs-improvement' | 'poor' => {
  if (value <= 0.1) return 'good';
  if (value <= 0.25) return 'needs-improvement';
  return 'poor';
};

/**
 * Monitor Web Vitals
 */
export const monitorWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Largest Contentful Paint (LCP)
  const observeLCP = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      const lcp = lastEntry.renderTime || lastEntry.loadTime;
      logMetric('LCP', lcp, getLCPRating(lcp));
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // LCP not supported
    }
  };

  // First Input Delay (FID)
  const observeFID = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        const fid = entry.processingStart - entry.startTime;
        logMetric('FID', fid, getFIDRating(fid));
      });
    });

    try {
      observer.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // FID not supported
    }
  };

  // Cumulative Layout Shift (CLS)
  const observeCLS = () => {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          logMetric('CLS', clsValue, getCLSRating(clsValue));
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // CLS not supported
    }
  };

  // First Contentful Paint (FCP)
  const observeFCP = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        logMetric('FCP', entry.startTime, entry.startTime <= 1800 ? 'good' : 'needs-improvement');
      });
    });

    try {
      observer.observe({ entryTypes: ['paint'] });
    } catch (e) {
      // FCP not supported
    }
  };

  // Initialize observers
  observeLCP();
  observeFID();
  observeCLS();
  observeFCP();
};

/**
 * Measure component render time
 */
export const measureRender = (componentName: string, callback: () => void) => {
  const start = performance.now();
  callback();
  const end = performance.now();
  const duration = end - start;

  if (process.env.NODE_ENV === 'development' && duration > 16) {
    console.warn(`[Performance] ${componentName} render took ${duration.toFixed(2)}ms (>16ms)`);
  }
};

/**
 * Throttle function to limit execution rate
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

/**
 * Debounce function to delay execution
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
