import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraiserCategoriesComponent } from './fundraiser-categories.component';

describe('FundraiserCategoriesComponent', () => {
  let component: FundraiserCategoriesComponent;
  let fixture: ComponentFixture<FundraiserCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundraiserCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundraiserCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
