import { Component, signal } from '@angular/core';
import { PrivacyModal } from '../../shared/components/privacy-modal/privacy-modal';
import { TermsModal } from '../../shared/components/terms-modal/terms-modal';

@Component({
  selector: 'app-booking',
  imports: [PrivacyModal, TermsModal],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export default class Booking {
  isTermsModalOpen = signal(false);
  openTermsModal() {
    this.isTermsModalOpen.set(true);
  }

  isPrivacyModalOpen = signal(false);
  openPrivacyModal() {
    this.isPrivacyModalOpen.set(true);
  }
}
