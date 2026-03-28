import { Component } from '@angular/core';
import { StatCard, StatCardData } from '../../../../shared/components/stat-card/stat-card';

@Component({
  selector: 'app-about',
  imports: [StatCard],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  stats: StatCardData[] = [
    { icon: 'star', value: '5,0', label: 'Estrelas no Google' },
    { icon: 'workspace_premium', value: '5+', label: 'Anos de Tradição' },
    { icon: 'sentiment_very_satisfied', value: '100%', label: 'Autoestima Recuperada' },
    { icon: 'sports_bar', value: '1K+', label: 'Cervejas Geladas Servidas' },
  ];
}
