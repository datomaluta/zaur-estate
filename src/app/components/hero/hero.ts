import { Component, inject, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  protected readonly lang = inject(LanguageService);
  readonly photoLoaded = signal(false);

  get headlineLines(): string[] {
    return this.lang.t().hero.headline.split('\n');
  }
}
