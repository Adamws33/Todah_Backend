import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingItemsComponent } from './pricing-items.component';

describe('PricingItemsComponent', () => {
  let component: PricingItemsComponent;
  let fixture: ComponentFixture<PricingItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
