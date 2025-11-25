// Performance optimization utilities

import { memo, useState, useEffect, useCallback } from 'react';

/**
 * Higher-order component for memoizing components
 */
export const withMemo = (Component, areEqual) => memo(Component, areEqual);

/**
 * Lazy image loading component
 */
export const LazyImage = memo(
  ({
    src,
    alt,
    className = '',
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMyMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjE2MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTU5NEE2IiBmb250LXNpemU9IjE0Ij5Mb2FkaW5nLi4uPC90ZXh0Pgo8L3N2Zz4=',
    ...props
  }) => {
    const [imageSrc, setImageSrc] = useState(placeholder);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    // Intersection Observer for lazy loading
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      const imgElement = document.querySelector(`[data-src="${src}"]`);
      if (imgElement) {
        observer.observe(imgElement);
      }

      return () => observer.disconnect();
    }, [src]);

    // Load actual image when in view
    useEffect(() => {
      if (isInView && !isLoaded) {
        const img = new Image();
        img.onload = () => {
          setImageSrc(src);
          setIsLoaded(true);
        };
        img.src = src;
      }
    }, [isInView, isLoaded, src]);

    return (
      <img
        data-src={src}
        src={imageSrc}
        alt={alt}
        className={`lazy-image ${isLoaded ? 'loaded' : 'loading'} ${className}`}
        {...props}
      />
    );
  }
);

/**
 * Performance monitoring hook
 */
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    interactionDelay: 0,
  });

  useEffect(() => {
    // Monitor page load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;

    // Monitor render time using Performance Observer
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            setMetrics((prev) => ({ ...prev, renderTime: entry.startTime }));
          }
        });
      });

      observer.observe({ entryTypes: ['paint'] });

      return () => observer.disconnect();
    }

    setMetrics((prev) => ({ ...prev, loadTime }));
  }, []);

  return metrics;
};

/**
 * Debounced search hook
 */
export const useDebouncedSearch = (searchTerm, delay = 300) => {
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, delay]);

  return debouncedTerm;
};

/**
 * Intersection Observer hook for element visibility
 */
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [element, setElement] = useState(null);

  const observer = useCallback(() => {
    if (!element) return;

    const obs = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    obs.observe(element);
    return () => obs.disconnect();
  }, [element, options]);

  useEffect(observer, [observer]);

  return [setElement, isIntersecting];
};

/**
 * Virtual scrolling component for large lists
 */
export const VirtualList = memo(
  ({ items, renderItem, itemHeight = 50, containerHeight = 400, overscan = 5 }) => {
    const [scrollTop, setScrollTop] = useState(0);

    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const endIndex = Math.min(
      items.length - 1,
      Math.floor((scrollTop + containerHeight) / itemHeight) + overscan
    );

    const visibleItems = items.slice(startIndex, endIndex + 1);
    const totalHeight = items.length * itemHeight;
    const offsetY = startIndex * itemHeight;

    const handleScroll = useCallback((e) => {
      setScrollTop(e.target.scrollTop);
    }, []);

    return (
      <div style={{ height: containerHeight, overflow: 'auto' }} onScroll={handleScroll}>
        <div style={{ height: totalHeight, position: 'relative' }}>
          <div style={{ transform: `translateY(${offsetY}px)` }}>
            {visibleItems.map((item, index) => renderItem(item, startIndex + index))}
          </div>
        </div>
      </div>
    );
  }
);

/**
 * Image preloader utility
 */
export const preloadImages = (imageSources) => {
  return Promise.all(
    imageSources.map(
      (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        })
    )
  );
};

/**
 * Resource prefetching utility
 */
export const prefetchResource = (href, as = 'fetch') => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};
