export type Lang = 'en' | 'ka';

export interface NavTranslations {
  home: string;
  services: string;
  process: string;
  testimonials: string;
  contact: string;
  cta: string;
}

export interface HeroTranslations {
  eyebrow: string;
  headline: string;
  subheadline: string;
  cta: string;
  ctaSecondary: string;
  badge: string;
}

export interface StatItem {
  label: string;
  suffix: string;
}

export interface StatsTranslations {
  sold: StatItem;
  leased: StatItem;
  clients: StatItem;
  years: StatItem;
}

export interface ServiceCard {
  title: string;
  description: string;
  features: string[];
}

export interface ServicesTranslations {
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: ServiceCard[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ProcessTranslations {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  avatarInitials: string;
}

export interface TestimonialsTranslations {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: TestimonialItem[];
}

export interface ContactFormTranslations {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  consentLabel: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successMessage: string;
  errorMessage: string;
  validation: {
    nameRequired: string;
    nameMin: string;
    emailRequired: string;
    emailInvalid: string;
    phoneInvalid: string;
    messageRequired: string;
    messageMin: string;
    consentRequired: string;
  };
}

export interface ContactTranslations {
  eyebrow: string;
  title: string;
  subtitle: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: string;
  hours: string;
  callTitle: string;
  callDesc: string;
  agentName: string;
  agentTitle: string;
  form: ContactFormTranslations;
}

export interface FooterTranslations {
  tagline: string;
  servicesHeading: string;
  companyHeading: string;
  contactHeading: string;
  serviceLinks: string[];
  companyLinks: Array<{ label: string; anchor: string }>;
  copyright: string;
  backToTop: string;
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  stats: StatsTranslations;
  services: ServicesTranslations;
  process: ProcessTranslations;
  testimonials: TestimonialsTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      process: 'How It Works',
      testimonials: 'Testimonials',
      contact: 'Contact',
      cta: 'Book Consultation',
    },
    hero: {
      eyebrow: 'Premium Real Estate Services',
      headline: 'Your Dream Property,\nOur Expert Guidance',
      subheadline:
        'With over 15 years of market expertise, I turn complex real estate decisions into confident, rewarding journeys — for buyers, sellers, and investors alike.',
      cta: 'Book a Consultation',
      ctaSecondary: 'View Services',
      badge: '5.0 ★ Rating  ·  550+ Satisfied Clients',
    },
    stats: {
      sold: { label: 'Properties Sold', suffix: '+' },
      leased: { label: 'Homes Leased', suffix: '+' },
      clients: { label: 'Satisfied Clients', suffix: '+' },
      years: { label: 'Years Experience', suffix: '' },
    },
    services: {
      eyebrow: 'What I Offer',
      title: 'Full-Service Real Estate',
      subtitle: 'From first viewing to final signature — comprehensive support at every stage.',
      cards: [
        {
          title: 'Buying',
          description:
            'Find your ideal property with expert market analysis, strategic negotiation, and seamless closing support.',
          features: [
            'Market Analysis',
            'Property Shortlisting',
            'Offer Negotiation',
            'Due Diligence',
          ],
        },
        {
          title: 'Selling',
          description:
            'Maximize your sale price with professional staging guidance, premium photography, and a targeted marketing plan.',
          features: ['Free Valuation', 'Staging Advice', 'Premium Listing', 'Offer Management'],
        },
        {
          title: 'Property Management',
          description:
            'Hands-off ownership made easy. We handle tenant screening, rent collection, and all maintenance coordination.',
          features: ['Tenant Screening', 'Rent Collection', 'Maintenance Mgmt', 'Compliance'],
        },
      ],
    },
    process: {
      eyebrow: 'My Process',
      title: 'How I Work With You',
      subtitle: 'A transparent, client-first approach from initial meeting to keys in hand.',
      steps: [
        {
          title: 'Initial Consultation',
          description:
            'We clarify your goals, budget, and timeline in a focused 30-minute session — no obligations.',
        },
        {
          title: 'Market Research',
          description:
            'In-depth analysis of comparables, pricing trends, and neighborhood dynamics tailored to your criteria.',
        },
        {
          title: 'Property Search',
          description:
            'A curated shortlist of properties that truly match your requirements — your time is never wasted.',
        },
        {
          title: 'Offer & Negotiate',
          description:
            'Strategic offer framing and skilled negotiation to secure the best possible terms on your behalf.',
        },
        {
          title: 'Close & Celebrate',
          description:
            'Meticulous paperwork management and coordination through to a smooth, stress-free closing day.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Client Stories',
      title: 'Trusted by Hundreds of Satisfied Clients',
      subtitle: 'Real results, real relationships.',
      items: [
        {
          name: 'Sarah Mitchell',
          role: 'First-time Buyer',
          quote:
            "The whole process felt effortless. We found our forever home in under 3 weeks, and the negotiation saved us €12,000. Couldn't recommend more highly.",
          avatarInitials: 'SM',
        },
        {
          name: 'James & Carol T.',
          role: 'Sold in 9 Days',
          quote:
            'Listed on a Tuesday, accepted an offer above asking price by Sunday. The marketing strategy was brilliant — professional photography made all the difference.',
          avatarInitials: 'JC',
        },
        {
          name: 'Priya Nair',
          role: 'Investment Buyer',
          quote:
            'The property management service paid for itself in month one. Zero stress, reliable tenants, and every detail handled. Genuinely exceptional service.',
          avatarInitials: 'PN',
        },
        {
          name: 'David & Emma R.',
          role: 'Relocation Clients',
          quote:
            "We were relocating from overseas and handled everything remotely. The entire process was flawless — found us a perfect home we'd never have discovered on our own.",
          avatarInitials: 'DE',
        },
      ],
    },
    contact: {
      eyebrow: 'Get In Touch',
      title: "Let's Start Your Journey",
      subtitle:
        "Whether you're buying, selling, or just exploring — I'm here to help. Send a message and I'll respond within 24 hours.",
      phone: '+995 568 91 91 35',
      phoneRaw: '+995555123456',
      email: 'hello@zaurrealty.com',
      address: 'Tbilisi, Georgia',
      hours: 'Available 24/7 — always here when you need us',
      callTitle: 'Call for a Free Consultation',
      callDesc:
        "Ready to talk? Call directly and I'll answer any questions about buying, selling, or property management — no obligations.",
      agentName: 'Zaur Vashakidze',
      agentTitle: 'Senior Real Estate Agent',
      form: {
        nameLabel: 'Full Name',
        namePlaceholder: 'Your full name',
        emailLabel: 'Email Address',
        emailPlaceholder: 'your@email.com',
        phoneLabel: 'Phone Number (optional)',
        phonePlaceholder: '+995 568 91 91 35',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell me about your property goals...',
        consentLabel: 'I agree to be contacted regarding my enquiry.',
        submit: 'Send Message',
        submitting: 'Sending...',
        successTitle: 'Message Received!',
        successMessage: "Thank you for reaching out. I'll be in touch within 24 hours.",
        errorMessage: 'Something went wrong. Please try again or call directly.',
        validation: {
          nameRequired: 'Name is required',
          nameMin: 'Minimum 2 characters',
          emailRequired: 'Email is required',
          emailInvalid: 'Please enter a valid email',
          phoneInvalid: 'Please enter a valid phone number',
          messageRequired: 'Message is required',
          messageMin: 'Please write at least 20 characters',
          consentRequired: 'Please give consent to continue',
        },
      },
    },
    footer: {
      tagline: 'Premium real estate services with a personal touch.',
      servicesHeading: 'Services',
      companyHeading: 'Company',
      contactHeading: 'Contact',
      serviceLinks: ['Buying', 'Selling', 'Property Management', 'Investment Advisory'],
      companyLinks: [
        { label: 'How It Works', anchor: '#process' },
        { label: 'Testimonials', anchor: '#testimonials' },
        { label: 'Contact', anchor: '#contact' },
      ],
      copyright: '© 2025 Zaur Realty. All rights reserved.',
      backToTop: 'Back to top',
    },
  },

  ka: {
    nav: {
      home: 'მთავარი',
      services: 'სერვისები',
      process: 'როგორ ვმუშაობ',
      testimonials: 'შეფასებები',
      contact: 'კონტაქტი',
      cta: 'კონსულტაციის დაჯავშნა',
    },
    hero: {
      eyebrow: 'პრემიუმ უძრავი ქონების სერვისი',
      headline: 'თქვენი მახვილი —\nჩემი კისერი',
      subheadline:
        '15 წელზე მეტი გამოცდილებით, ვაქცევ უძრავი ქონების რთულ გადაწყვეტილებებს დამაჯერებელ და ხარებიან მოგზაურობად — მყიდველებისთვის, გამყიდველებისა და ინვესტორებისთვის.',
      cta: 'კონსულტაციის დაჯავშნა',
      ctaSecondary: 'სერვისები',
      badge: '5.0 ★ შეფასება  ·  550+ კმაყოფილი კლიენტი',
    },
    stats: {
      sold: { label: 'გაყიდული ბინა', suffix: '+' },
      leased: { label: 'გაქირავებული სახლი', suffix: '+' },
      clients: { label: 'კმაყოფილი კლიენტი', suffix: '+' },
      years: { label: 'წლის გამოცდილება', suffix: '' },
    },
    services: {
      eyebrow: 'ჩემი სერვისები',
      title: 'სრული სპექტრის სერვისი',
      subtitle: 'პირველი ნახვიდან ბოლო ხელმოწერამდე — ყოვლისმომცველი მხარდაჭერა.',
      cards: [
        {
          title: 'ყიდვა',
          description:
            'იპოვეთ იდეალური ქონება ბაზრის ექსპერტული ანალიზით, სტრატეგიული მოლაპარაკებებითა და გარიგების მოქნილი მართვით.',
          features: [
            'ბაზრის ანალიზი',
            'ქონების შერჩევა',
            'შეთავაზების მოლაპარაკება',
            'Due Diligence',
          ],
        },
        {
          title: 'გაყიდვა',
          description:
            'გაზარდეთ გაყიდვის ფასი პროფესიონალური სტეიჯინგის, პრემიუმ ფოტოგრაფიისა და მიზნობრივი მარკეტინგის გეგმით.',
          features: [
            'უფასო შეფასება',
            'სტეიჯინგის რჩევა',
            'პრემიუმ განცხადება',
            'შეთავაზების მართვა',
          ],
        },
        {
          title: 'ქონების მართვა',
          description:
            'უნაღდო მფლობელობა. ჩვენ ვმართავთ მოიჯარეებს, ტექნიკურ მომსახურებასა და კანონმდებლობასთან შესაბამისობას.',
          features: [
            'მოიჯარის შერჩევა',
            'ქირის შეგროვება',
            'ტექნიკური მომსახურება',
            'შესაბამისობა',
          ],
        },
      ],
    },
    process: {
      eyebrow: 'ჩემი მეთოდი',
      title: 'როგორ ვთანამშრომლობ',
      subtitle:
        'გამჭვირვალე, კლიენტზე ორიენტირებული მიდგომა პირველი შეხვედრიდან გასაღებების ჩაბარებამდე.',
      steps: [
        {
          title: 'პირველი კონსულტაცია',
          description:
            'განვსაზღვრავთ თქვენს მიზნებს, ბიუჯეტს და ვადებს — 30 წუთიანი, სავალდებულო ვალდებულებების გარეშე.',
        },
        {
          title: 'ბაზრის კვლევა',
          description:
            'ანალოგური ქონებების, ფასთა ტენდენციებისა და სამეზობლოს დინამიკის სიღრმისეული ანალიზი.',
        },
        {
          title: 'ქონების ძიება',
          description:
            'შერჩეული სია, რომელიც ნამდვილად შეესაბამება თქვენს მოთხოვნებს — თქვენი დრო ფასეულია.',
        },
        {
          title: 'შეთავაზება და მოლაპარაკება',
          description:
            'სტრატეგიული შეთავაზება და გამოცდილი მოლაპარაკება საუკეთესო პირობების მოსაპოვებლად.',
        },
        {
          title: 'დახურვა და ზეიმი',
          description: 'საბუთების ფრთხილი მართვა და კოორდინაცია გლუვ, სტრესგარეშე დახურვის დღემდე.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'კლიენტების ამბები',
      title: 'ასობით ადამიანის ნდობა',
      subtitle: 'რეალური შედეგები, რეალური ურთიერთობები.',
      items: [
        {
          name: 'სარა მიტჩელი',
          role: 'პირველი მყიდველი',
          quote:
            'მთელი პროცესი მარტივად ჩაიარა. 3 კვირაში ვიპოვეთ ჩვენი სახლი, ხოლო მოლაპარაკებამ 12,000 ევრო დაგვიზოგა. ყველაზე კარგი სერვისი.',
          avatarInitials: 'სმ',
        },
        {
          name: 'ჯეიმსი და კეროლი',
          role: '9 დღეში გაიყიდა',
          quote:
            'სამშაბათს განვათავსეთ, კვირას მოთხოვნაზე მაღალ ფასზე შევთანხმდით. მარკეტინგის სტრატეგია გამორჩეული იყო — ფოტოგრაფიამ ყველაფერი გადაწყვიტა.',
          avatarInitials: 'ჯკ',
        },
        {
          name: 'პრია ნეირი',
          role: 'ინვესტიციური მყიდველი',
          quote:
            'ქონების მართვის სერვისი პირველ თვეშივე გადაიხადა. ნულოვანი სტრესი, სანდო მოიჯარეები, ყველა დეტალი მოგვარებული. ნამდვილად გამორჩეული სერვისი.',
          avatarInitials: 'პნ',
        },
        {
          name: 'დევიდი და ემა',
          role: 'გადასახლება',
          quote:
            'საზღვარგარეთიდან გადმოვდიოდით და ყველაფერი დისტანციურად მოხდა. მთელი პროცესი უნაკლო იყო — ვიპოვეთ სახლი, რომელსაც სხვა ვერ ვიპოვიდით.',
          avatarInitials: 'დე',
        },
      ],
    },
    contact: {
      eyebrow: 'დაგვიკავშირდით',
      title: 'დავიწყოთ თქვენი მოგზაურობა',
      subtitle:
        'ყიდვა, გაყიდვა თუ უბრალოდ შესწავლა — მე აქ ვარ. გამოაგზავნეთ შეტყობინება და 24 საათში გიპასუხებ.',
      phone: '+995 568 91 91 35',
      phoneRaw: '+995555123456',
      email: 'hello@zaurrealty.com',
      address: 'თბილისი, საქართველო',
      hours: '24/7 ხელმისაწვდომი — ყოველთვის აქ ვართ, როცა გვჭირდებით',
      callTitle: 'დარეკეთ უფასო კონსულტაციისთვის',
      callDesc:
        'მზად ხართ ისაუბროთ? დამირეკეთ პირდაპირ და ნებისმიერ კითხვას გიპასუხებ ყიდვის, გაყიდვის ან ქონების მართვის შესახებ — ვალდებულებების გარეშე.',
      agentName: 'ზაურ ვაშაკიძე',
      agentTitle: 'სენიორ უძრავი ქონების აგენტი',
      form: {
        nameLabel: 'სრული სახელი',
        namePlaceholder: 'თქვენი სრული სახელი',
        emailLabel: 'ელ-ფოსტა',
        emailPlaceholder: 'your@email.com',
        phoneLabel: 'ტელეფონი (სურვილისამებრ)',
        phonePlaceholder: '+995 568 91 91 35',
        messageLabel: 'შეტყობინება',
        messagePlaceholder: 'მოგვიყევით თქვენი ქონებრივი მიზნების შესახებ...',
        consentLabel: 'ვეთანხმები, რომ დამიკავშირდნენ მოთხოვნის საკითხზე.',
        submit: 'გაგზავნა',
        submitting: 'იგზავნება...',
        successTitle: 'შეტყობინება მიღებულია!',
        successMessage: 'მადლობა, რომ მოგვმართეთ. 24 საათში დაგიკავშირდებით.',
        errorMessage: 'რაღაც შეფერხება მოხდა. სცადეთ ხელახლა ან დარეკეთ პირდაპირ.',
        validation: {
          nameRequired: 'სახელი სავალდებულოა',
          nameMin: 'მინიმუმ 2 სიმბოლო',
          emailRequired: 'ელ-ფოსტა სავალდებულოა',
          emailInvalid: 'შეიყვანეთ სწორი ელ-ფოსტა',
          phoneInvalid: 'შეიყვანეთ სწორი ტელეფონის ნომერი',
          messageRequired: 'შეტყობინება სავალდებულოა',
          messageMin: 'გთხოვთ დაწეროთ სულ მცირე 20 სიმბოლო',
          consentRequired: 'გთხოვთ მიეცით თანხმობა გასაგრძელებლად',
        },
      },
    },
    footer: {
      tagline: 'პრემიუმ უძრავი ქონების სერვისი პირადი მიდგომით.',
      servicesHeading: 'სერვისები',
      companyHeading: 'კომპანია',
      contactHeading: 'კონტაქტი',
      serviceLinks: ['ყიდვა', 'გაყიდვა', 'ქონების მართვა', 'საინვესტიციო კონსულტაცია'],
      companyLinks: [
        { label: 'როგორ ვმუშაობ', anchor: '#process' },
        { label: 'შეფასებები', anchor: '#testimonials' },
        { label: 'კონტაქტი', anchor: '#contact' },
      ],
      copyright: '© 2025 Zaur Realty. ყველა უფლება დაცულია.',
      backToTop: 'მწვერვალზე დაბრუნება',
    },
  },
};
