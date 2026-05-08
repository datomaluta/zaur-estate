import { Injectable, NgZone, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollAnimationService {
  private readonly ngZone = inject(NgZone);

  observe(
    element: Element,
    onVisible: () => void,
    options: IntersectionObserverInit = { threshold: 0.15 }
  ): () => void {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.ngZone.run(onVisible);
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }
}
