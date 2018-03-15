import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCampaignSmallTextItemsComponent } from './start-campaign-small-text-items.component';

describe('StartCampaignSmallTextItemsComponent', () => {
  let component: StartCampaignSmallTextItemsComponent;
  let fixture: ComponentFixture<StartCampaignSmallTextItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCampaignSmallTextItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCampaignSmallTextItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
