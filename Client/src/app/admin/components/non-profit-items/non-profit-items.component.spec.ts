import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonProfitItemsComponent } from './non-profit-items.component';

describe('NonProfitItemsComponent', () => {
  let component: NonProfitItemsComponent;
  let fixture: ComponentFixture<NonProfitItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonProfitItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonProfitItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
