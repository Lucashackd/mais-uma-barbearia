import { Routes } from '@angular/router';
import Home from './features/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'servicos',
    loadComponent: () => import('./features/services/services')
  },
  {
    path: 'contato',
    loadComponent: () => import('./features/contact/contact')
  },
  {
    path: 'agendamento',
    loadComponent: () => import('./features/booking/booking')
  }
];
