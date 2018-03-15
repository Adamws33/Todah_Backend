import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailOptInRequestsComponent } from './email-opt-in-requests.component';

describe('EmailOptInRequestsComponent', () => {
  let component: EmailOptInRequestsComponent;
  let fixture: ComponentFixture<EmailOptInRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailOptInRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailOptInRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
