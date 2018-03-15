import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCampaignSnapshotComponent } from './find-campaign-snapshot.component';

describe('FindCampaignSnapshotComponent', () => {
  let component: FindCampaignSnapshotComponent;
  let fixture: ComponentFixture<FindCampaignSnapshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCampaignSnapshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCampaignSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
