import { Component, HostListener, inject, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  protected readonly lang = inject(LanguageService);

  readonly isScrolled = signal(false);
  readonly isMobileMenuOpen = signal(false);

  readonly navLinks = [
    { key: 'services',     anchor: '#services' },
    { key: 'process',      anchor: '#process' },
    { key: 'testimonials', anchor: '#testimonials' },
    { key: 'contact',      anchor: '#contact' },
  ] as const;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  getLinkLabel(key: string): string {
    const t = this.lang.t().nav as unknown as Record<string, string>;
    return t[key] ?? key;
  }
}
