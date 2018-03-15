import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCampaignPersonalForm2Component } from './start-campaign-personal-form2.component';

describe('StartCampaignPersonalForm2Component', () => {
  let component: StartCampaignPersonalForm2Component;
  let fixture: ComponentFixture<StartCampaignPersonalForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCampaignPersonalForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCampaignPersonalForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
