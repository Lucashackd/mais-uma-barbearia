import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-lang-toggle',
  imports: [],
  templateUrl: './lang-toggle.html',
  styleUrl: './lang-toggle.css',
})
export class LangToggle {
  currentLang = signal<'pt-BR' | 'es-AR'>('pt-BR');

  toggleLang() {
    this.currentLang.update((currentLang) => (currentLang === 'pt-BR' ? 'es-AR' : 'pt-BR'));
  }
}
