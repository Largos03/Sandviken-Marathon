/**
 * Creates an intersection observer that detects when elements enter the viewport
 * @param callback Function to call when the observed element enters the viewport
 * @param options IntersectionObserver options
 * @returns An IntersectionObserver instance
 */
export function createViewportObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverOptions = {}
): IntersectionObserver {
  const defaultOptions: IntersectionObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15,
    ...options
  };

  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    });
  }, defaultOptions);
}

/**
 * Svelte action to detect when an element enters the viewport
 * 
 * Usage:
 * <div use:inView={handleInView}>...</div>
 * 
 * @param node The DOM node to observe
 * @param callback Function to call when the node enters the viewport
 */
export function inView(
  node: HTMLElement,
  callback: (entry: IntersectionObserverEntry) => void
): { destroy: () => void } {
  const observer = createViewportObserver((entry) => {
    callback(entry);
    observer.unobserve(node);
  });

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    }
  };
}

// Types
export interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
} 