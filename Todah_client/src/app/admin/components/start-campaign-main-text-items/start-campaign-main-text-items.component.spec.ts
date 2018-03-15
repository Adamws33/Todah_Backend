import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCampaignMainTextItemsComponent } from './start-campaign-main-text-items.component';

describe('StartCampaignMainTextItemsComponent', () => {
  let component: StartCampaignMainTextItemsComponent;
  let fixture: ComponentFixture<StartCampaignMainTextItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCampaignMainTextItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCampaignMainTextItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
