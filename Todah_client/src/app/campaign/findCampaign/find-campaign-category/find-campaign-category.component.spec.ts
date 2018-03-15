import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCampaignCategoryComponent } from './find-campaign-category.component';

describe('FindCampaignCategoryComponent', () => {
  let component: FindCampaignCategoryComponent;
  let fixture: ComponentFixture<FindCampaignCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCampaignCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCampaignCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
