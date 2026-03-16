import { Injectable } from '@angular/core';

export interface NavigationLink {
  path: string;
  label: string;
  icon: string;
  ariaLabel: string;
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  links: NavigationLink[] = [
    { path: '/', label: 'Início', icon: 'home', ariaLabel: 'Acessar página inicial' },
    { path: '/servicos', label: 'Serviços', icon: 'content_cut', ariaLabel: 'Acessar serviços' },
    { path: '/contato', label: 'Contato', icon: 'phone', ariaLabel: 'Acessar opções de contato' },
    {
      path: '/agendamento',
      label: 'Agendamento',
      icon: 'calendar_add_on',
      ariaLabel: 'Acessar página de agendamento',
    },
  ];
}
