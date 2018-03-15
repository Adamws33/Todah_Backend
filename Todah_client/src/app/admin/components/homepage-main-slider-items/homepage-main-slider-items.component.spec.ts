import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMainSliderItemsComponent } from './homepage-main-slider-items.component';

describe('HomepageMainSliderItemsComponent', () => {
  let component: HomepageMainSliderItemsComponent;
  let fixture: ComponentFixture<HomepageMainSliderItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageMainSliderItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageMainSliderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
