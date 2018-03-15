import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageLearnMoreItemsComponent } from './homepage-learn-more-items.component';

describe('HomepageLearnMoreItemsComponent', () => {
  let component: HomepageLearnMoreItemsComponent;
  let fixture: ComponentFixture<HomepageLearnMoreItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageLearnMoreItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageLearnMoreItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
