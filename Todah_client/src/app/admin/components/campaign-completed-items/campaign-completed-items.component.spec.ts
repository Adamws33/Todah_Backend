import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCompletedItemsComponent } from './campaign-completed-items.component';

describe('CampaignCompletedItemsComponent', () => {
  let component: CampaignCompletedItemsComponent;
  let fixture: ComponentFixture<CampaignCompletedItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignCompletedItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignCompletedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
