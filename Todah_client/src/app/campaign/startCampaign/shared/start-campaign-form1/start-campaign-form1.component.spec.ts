import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCampaignPersonalForm1Component } from './start-campaign-personal-form1.component';

describe('StartCampaignPersonalForm1Component', () => {
  let component: StartCampaignPersonalForm1Component;
  let fixture: ComponentFixture<StartCampaignPersonalForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCampaignPersonalForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCampaignPersonalForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
