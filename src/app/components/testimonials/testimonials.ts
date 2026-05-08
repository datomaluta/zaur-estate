import { Component, OnDestroy, computed, effect, inject, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class TestimonialsComponent implements OnDestroy {
  protected readonly lang = inject(LanguageService);

  readonly activeIndex = signal(0);
  readonly isAutoPlaying = signal(true);

  readonly trackStyle = computed(() => ({
    transform: `translateX(-${this.activeIndex() * 100}%)`,
  }));

  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor() {
    effect(() => {
      if (this.isAutoPlaying()) {
        this.startAutoPlay();
      } else {
        this.stopAutoPlay();
      }
    });
  }

  get items() {
    return this.lang.t().testimonials.items;
  }

  prev(): void {
    this.activeIndex.update(i => (i === 0 ? this.items.length - 1 : i - 1));
  }

  next(): void {
    this.activeIndex.update(i => (i === this.items.length - 1 ? 0 : i + 1));
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
  }

  pauseAutoPlay(): void {
    this.isAutoPlaying.set(false);
  }

  resumeAutoPlay(): void {
    this.isAutoPlaying.set(true);
  }

  stars(rating: number): number[] {
    return Array.from({ length: rating });
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();
    this.intervalId = setInterval(() => {
      this.next();
    }, 4500);
  }

  private stopAutoPlay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }
}
