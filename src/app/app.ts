import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/layouts/header/header';
import { BottomTabs } from './shared/layouts/bottom-tabs/bottom-tabs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, BottomTabs],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mais-uma-barbearia');
}
