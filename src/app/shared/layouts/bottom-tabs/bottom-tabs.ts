import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationService } from '../../services/navigation';

@Component({
  selector: 'app-bottom-tabs',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './bottom-tabs.html',
  styleUrl: './bottom-tabs.css',
})
export class BottomTabs {
  navigation = inject(NavigationService);
}
