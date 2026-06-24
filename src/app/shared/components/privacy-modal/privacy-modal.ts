import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-privacy-modal',
  imports: [],
  templateUrl: './privacy-modal.html',
  styleUrl: './privacy-modal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyModal {
  closeModal = output<void>();
}
