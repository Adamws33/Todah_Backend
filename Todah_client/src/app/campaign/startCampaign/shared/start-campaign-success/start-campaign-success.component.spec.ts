import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCampaignPersonalSuccessComponent } from './start-campaign-personal-success.component';

describe('StartCampaignPersonalSuccessComponent', () => {
  let component: StartCampaignPersonalSuccessComponent;
  let fixture: ComponentFixture<StartCampaignPersonalSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCampaignPersonalSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCampaignPersonalSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
