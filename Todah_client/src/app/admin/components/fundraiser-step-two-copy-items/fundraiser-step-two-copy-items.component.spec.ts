import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraiserStepTwoCopyItemsComponent } from './fundraiser-step-two-copy-items.component';

describe('FundraiserStepTwoCopyItemsComponent', () => {
  let component: FundraiserStepTwoCopyItemsComponent;
  let fixture: ComponentFixture<FundraiserStepTwoCopyItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundraiserStepTwoCopyItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundraiserStepTwoCopyItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
