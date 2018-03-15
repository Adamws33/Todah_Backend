import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDevelopmentItemsComponent } from './game-development-items.component';

describe('GameDevelopmentItemsComponent', () => {
  let component: GameDevelopmentItemsComponent;
  let fixture: ComponentFixture<GameDevelopmentItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDevelopmentItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDevelopmentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
