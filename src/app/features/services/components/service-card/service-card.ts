import { Component, input } from '@angular/core';

export interface ServiceCardData {
  id: number;
  title: string;
  description?: string | null;
  icon: string;
  time: string;
}

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
})
export class ServiceCard {
  service = input.required<ServiceCardData>();
}
