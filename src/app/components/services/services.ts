import { Component, inject, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';
import { RealEstateDataService } from '../../core/services/real-estate-data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class ServicesComponent {
  protected readonly lang = inject(LanguageService);
  protected readonly data = inject(RealEstateDataService);

  readonly activeCard = signal<number | null>(null);

  getIcon(index: number): string {
    return this.data.serviceIcons[index]?.icon ?? 'House';
  }
}
