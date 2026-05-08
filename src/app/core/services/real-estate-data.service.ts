import { Injectable } from '@angular/core';

export interface StatConfig {
  key: 'sold' | 'leased' | 'clients' | 'years';
  target: number;
  icon: string;
}

export interface ServiceIconConfig {
  id: number;
  icon: string;
}

export interface ProcessIconConfig {
  step: number;
  icon: string;
}

@Injectable({ providedIn: 'root' })
export class RealEstateDataService {
  readonly stats: StatConfig[] = [
    { key: 'sold',    target: 150, icon: 'House' },
    { key: 'leased',  target: 200, icon: 'Key' },
    { key: 'clients', target: 550, icon: 'Users' },
    { key: 'years',   target: 15,  icon: 'Award' },
  ];

  readonly serviceIcons: ServiceIconConfig[] = [
    { id: 0, icon: 'House' },
    { id: 1, icon: 'TrendingUp' },
    { id: 2, icon: 'Building2' },
  ];

  readonly processIcons: ProcessIconConfig[] = [
    { step: 0, icon: 'MessageCircle' },
    { step: 1, icon: 'ChartBar' },
    { step: 2, icon: 'Search' },
    { step: 3, icon: 'Handshake' },
    { step: 4, icon: 'Key' },
  ];
}
