import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyModal } from './privacy-modal';

describe('PrivacyModal', () => {
  let component: PrivacyModal;
  let fixture: ComponentFixture<PrivacyModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyModal],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
