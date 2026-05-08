import { Component } from '@angular/core';
import { NavbarComponent }       from './components/navbar/navbar';
import { HeroComponent }         from './components/hero/hero';
import { StatsComponent }        from './components/stats/stats';
import { ServicesComponent }     from './components/services/services';
import { ProcessComponent }      from './components/process/process';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { ContactComponent }      from './components/contact/contact';
import { FooterComponent }       from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    StatsComponent,
    ServicesComponent,
    ProcessComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero         id="hero" />
      <app-stats        id="stats" />
      <app-services     id="services" />
      <app-process      id="process" />
      <app-testimonials id="testimonials" />
      <app-contact      id="contact" />
    </main>
    <app-footer />
  `,
  styles: [`main { display: block; }`],
})
export class App {}
