import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMissionItemsComponent } from './about-mission-items.component';

describe('AboutMissionItemsComponent', () => {
  let component: AboutMissionItemsComponent;
  let fixture: ComponentFixture<AboutMissionItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMissionItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMissionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
