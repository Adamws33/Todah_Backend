import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationNotificationsComponent } from './donation-notifications.component';

describe('DonationNotificationsComponent', () => {
  let component: DonationNotificationsComponent;
  let fixture: ComponentFixture<DonationNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
