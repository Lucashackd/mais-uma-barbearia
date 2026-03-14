import { Routes } from '@angular/router';
import Home from './features/home/home';

export const routes: Routes = [
  {
    path: '',
    title: '+UMA BARBEARIA | Início',
    component: Home,
  },
  {
    path: 'servicos',
    title: '+UMA BARBEARIA | Serviços',
    loadComponent: () => import('./features/services/services')
  },
  {
    path: 'contato',
    title: '+UMA BARBEARIA | Contato',
    loadComponent: () => import('./features/contact/contact')
  },
  {
    path: 'agendamento',
    title: '+UMA BARBEARIA | Agendamento',
    loadComponent: () => import('./features/booking/booking')
  }
];
