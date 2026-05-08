import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  protected readonly lang = inject(LanguageService);

  readonly contactInfo = [
    { icon: 'Phone',  key: 'phone'   },
    { icon: 'Mail',   key: 'email'   },
    { icon: 'MapPin', key: 'address' },
  ] as const;

  getContactValue(key: string): string {
    const contact = this.lang.t().contact as unknown as Record<string, string>;
    return contact[key] ?? '';
  }
}

/*
  FORM LOGIC — commented out temporarily, re-enable when backend is ready

  import { signal, computed } from '@angular/core';
  import { ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';

  type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
  readonly formStatus = signal<FormStatus>('idle');
  readonly isSubmitting = computed(() => this.formStatus() === 'submitting');
  private readonly fb = inject(NonNullableFormBuilder);
  readonly form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    phone:   ['', [Validators.pattern(/^\+?[\d\s\-()]{7,20}$/)]],
    message: ['', [Validators.required, Validators.minLength(20)]],
    consent: [false, Validators.requiredTrue],
  });
  ...
*/
