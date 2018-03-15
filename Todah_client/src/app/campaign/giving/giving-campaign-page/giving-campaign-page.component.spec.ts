import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivingCampaignPageComponent } from './giving-campaign-page.component';

describe('GivingCampaignPageComponent', () => {
  let component: GivingCampaignPageComponent;
  let fixture: ComponentFixture<GivingCampaignPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivingCampaignPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivingCampaignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
