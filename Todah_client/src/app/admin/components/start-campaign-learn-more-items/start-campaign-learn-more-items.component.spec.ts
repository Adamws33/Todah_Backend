import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCampaignLearnMoreItemsComponent } from './start-campaign-learn-more-items.component';

describe('StartCampaignLearnMoreItemsComponent', () => {
  let component: StartCampaignLearnMoreItemsComponent;
  let fixture: ComponentFixture<StartCampaignLearnMoreItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCampaignLearnMoreItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCampaignLearnMoreItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
