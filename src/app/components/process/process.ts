import { Component, ElementRef, OnDestroy, QueryList, ViewChildren, AfterViewInit, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';
import { RealEstateDataService } from '../../core/services/real-estate-data.service';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class ProcessComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('stepEl') stepEls!: QueryList<ElementRef<HTMLElement>>;

  protected readonly lang = inject(LanguageService);
  protected readonly data = inject(RealEstateDataService);
  private readonly scrollSvc = inject(ScrollAnimationService);

  private unobservers: Array<() => void> = [];
  private changesSub?: Subscription;

  ngAfterViewInit(): void {
    this.observeAll();

    // Re-observe whenever @for re-renders (e.g. language switch)
    this.changesSub = this.stepEls.changes.subscribe(() => {
      this.observeAll();
    });
  }

  private observeAll(): void {
    this.unobservers.forEach(fn => fn());
    this.unobservers = [];

    this.stepEls.forEach((el) => {
      const unobserve = this.scrollSvc.observe(
        el.nativeElement,
        () => el.nativeElement.classList.add('is-visible'),
        { threshold: 0, rootMargin: '0px 0px -60px 0px' }
      );
      this.unobservers.push(unobserve);
    });
  }

  getIcon(index: number): string {
    return this.data.processIcons[index]?.icon ?? 'Circle';
  }

  ngOnDestroy(): void {
    this.unobservers.forEach(fn => fn());
    this.changesSub?.unsubscribe();
  }
}
