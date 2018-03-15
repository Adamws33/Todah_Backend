import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignGoalRangesComponent } from './campaign-goal-ranges.component';

describe('CampaignGoalRangesComponent', () => {
  let component: CampaignGoalRangesComponent;
  let fixture: ComponentFixture<CampaignGoalRangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignGoalRangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignGoalRangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
