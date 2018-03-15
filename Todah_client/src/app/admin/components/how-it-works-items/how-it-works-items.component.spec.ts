import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksItemsComponent } from './how-it-works-items.component';

describe('HowItWorksItemsComponent', () => {
  let component: HowItWorksItemsComponent;
  let fixture: ComponentFixture<HowItWorksItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowItWorksItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorksItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
