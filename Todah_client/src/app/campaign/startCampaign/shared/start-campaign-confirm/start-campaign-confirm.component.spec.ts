import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCampaignPersonalConfirmComponent } from './start-campaign-personal-confirm.component';

describe('StartCampaignPersonalConfirmComponent', () => {
  let component: StartCampaignPersonalConfirmComponent;
  let fixture: ComponentFixture<StartCampaignPersonalConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCampaignPersonalConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCampaignPersonalConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
