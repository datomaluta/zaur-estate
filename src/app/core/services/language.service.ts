import { Injectable, signal, computed } from '@angular/core';
import { TRANSLATIONS, Lang } from '../i18n/translations';

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly currentLang = signal<Lang>(this.getSavedLang());
  readonly t = computed(() => TRANSLATIONS[this.currentLang()]);

  constructor() {
    document.documentElement.lang = this.currentLang();
  }

  toggle(): void {
    this.setLang(this.currentLang() === 'en' ? 'ka' : 'en');
  }

  setLang(lang: Lang): void {
    this.currentLang.set(lang);
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }

  private getSavedLang(): Lang {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'ka' ? 'ka' : 'en';
  }
}
