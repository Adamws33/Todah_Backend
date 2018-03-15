import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouMessagesComponent } from './thank-you-messages.component';

describe('ThankYouMessagesComponent', () => {
  let component: ThankYouMessagesComponent;
  let fixture: ComponentFixture<ThankYouMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankYouMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
