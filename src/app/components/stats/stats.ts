import { Component, ElementRef, OnDestroy, ViewChild, AfterViewInit, inject, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';
import { RealEstateDataService } from '../../core/services/real-estate-data.service';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';
import { StatsTranslations } from '../../core/i18n/translations';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class StatsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('section') sectionRef!: ElementRef<HTMLElement>;

  protected readonly lang = inject(LanguageService);
  protected readonly data = inject(RealEstateDataService);
  private readonly scrollSvc = inject(ScrollAnimationService);

  readonly counters = signal<number[]>([0, 0, 0, 0]);
  private hasAnimated = false;
  private intervalId: ReturnType<typeof setInterval> | null = null;
  private unobserve?: () => void;

  ngAfterViewInit(): void {
    this.unobserve = this.scrollSvc.observe(
      this.sectionRef.nativeElement,
      () => this.startCountUp(),
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    );
  }

  getLabel(key: string): string {
    const stats = this.lang.t().stats as StatsTranslations;
    const stat = stats[key as keyof StatsTranslations];
    return stat ? stat.label : key;
  }

  getSuffix(key: string): string {
    const stats = this.lang.t().stats as StatsTranslations;
    const stat = stats[key as keyof StatsTranslations];
    return stat ? stat.suffix : '';
  }

  private startCountUp(): void {
    if (this.hasAnimated) return;
    this.hasAnimated = true;

    const targets = this.data.stats.map(s => s.target);
    const duration = 1800;
    const fps = 60;
    const totalFrames = Math.round((duration / 1000) * fps);
    let frame = 0;

    this.intervalId = setInterval(() => {
      frame++;
      const progress = this.easeOutQuart(frame / totalFrames);
      this.counters.set(targets.map(t => Math.floor(t * progress)));

      if (frame >= totalFrames) {
        this.counters.set([...targets]);
        clearInterval(this.intervalId!);
        this.intervalId = null;
      }
    }, 1000 / fps);
  }

  private easeOutQuart(t: number): number {
    return 1 - Math.pow(1 - t, 4);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
    this.unobserve?.();
  }
}
