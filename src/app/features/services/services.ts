import { Component } from '@angular/core';
import { Banner } from './components/banner/banner';
import { ServiceCard, ServiceCardData } from './components/service-card/service-card';

@Component({
  selector: 'app-services',
  imports: [Banner, ServiceCard],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export default class Services {
  services: ServiceCardData[] = [
    {
      id: 1,
      title: 'Corte',
      description: 'Serviço executado com lavagem dos cabelos e finalizado com secagem.',
      icon: 'content_cut',
      time: '30 min',
    },
    {
      id: 2,
      title: 'Barba Navalha',
      description: 'Serviço executado com toalha quente e acabamento com navalha.',
      icon: 'face_retouching_natural',
      time: '30 min',
    },
    {
      id: 3,
      title: 'Corte + Barba Navalha',
      description:
        'Serviço completo, corte com lavagem e finalização. E barba com toalha quente e navalha.',
      icon: 'workspace_premium',
      time: '1 hora',
    },
    {
      id: 4,
      title: 'Corte + Barba Express (Máquina)',
      description:
        'Corte com lavagem e finalização. E Barba Express na máquina desenhada e acabamento com shaver.',
      icon: 'bolt',
      time: '1 hora',
    },
    {
      id: 5,
      title: 'Barba Express (Máquina)',
      description:
        'Barba Express - Desenhada e acabamento com shaver, sem a utilização de navalha e toalha quente.',
      icon: 'timer',
      time: '30 min',
    },
    {
      id: 6,
      title: 'Corte (Máquina)',
      description:
        'Serviço executado com máquina simples, sem degrade e tesoura. Com lavagem e finalização',
      icon: 'crop',
      time: '30 min',
    },
    {
      id: 7,
      title: 'Cera (nariz, ou orelha)',
      icon: 'water_drop',
      time: '15 min',
    },
    {
      id: 8,
      title: `Contorno - "pézinho"`,
      icon: 'brush',
      time: '15 min',
    },
    {
      id: 9,
      title: 'Pigmentação de barba',
      icon: 'palette',
      time: '30 min',
    },
  ];
}
