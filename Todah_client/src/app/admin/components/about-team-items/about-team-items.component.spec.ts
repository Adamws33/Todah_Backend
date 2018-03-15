import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTeamItemsComponent } from './about-team-items.component';

describe('AboutTeamItemsComponent', () => {
  let component: AboutTeamItemsComponent;
  let fixture: ComponentFixture<AboutTeamItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTeamItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTeamItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
