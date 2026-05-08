import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  House, Key, Users, Award,
  TrendingUp, Building2,
  MessageCircle, ChartBar, Search, Handshake,
  Menu, X, PhoneCall, ArrowRight, ArrowUp,
  Star, MapPin, Check, CircleCheck,
  ChevronLeft, ChevronRight,
  Send, Phone, Mail, Quote,
  Instagram, Facebook, Linkedin, Twitter,
  MessageSquare,
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(
      LucideAngularModule.pick({
        House, Key, Users, Award,
        TrendingUp, Building2,
        MessageCircle, ChartBar, Search, Handshake,
        Menu, X, PhoneCall, ArrowRight, ArrowUp,
        Star, MapPin, Check, CircleCheck,
        ChevronLeft, ChevronRight,
        Send, Phone, Mail, Quote,
        Instagram, Facebook, Linkedin, Twitter,
        MessageSquare,
      })
    ),
  ],
};
