import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  protected readonly lang = inject(LanguageService);

  readonly socialLinks = [
    { icon: 'Instagram', href: '#', label: 'Instagram' },
    { icon: 'Facebook',  href: '#', label: 'Facebook' },
    { icon: 'Linkedin',  href: '#', label: 'LinkedIn' },
    { icon: 'Twitter',   href: '#', label: 'Twitter' },
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
