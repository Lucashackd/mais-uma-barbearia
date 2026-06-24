import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-terms-modal',
  imports: [],
  templateUrl: './terms-modal.html',
  styleUrl: './terms-modal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsModal {
  closeModal = output<void>();
}
