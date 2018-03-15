import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductibilityStatusesComponent } from './deductibility-statuses.component';

describe('DeductibilityStatusesComponent', () => {
  let component: DeductibilityStatusesComponent;
  let fixture: ComponentFixture<DeductibilityStatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeductibilityStatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductibilityStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
