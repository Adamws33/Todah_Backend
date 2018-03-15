import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToSucceedItemsComponent } from './how-to-succeed-items.component';

describe('HowToSucceedItemsComponent', () => {
  let component: HowToSucceedItemsComponent;
  let fixture: ComponentFixture<HowToSucceedItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToSucceedItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToSucceedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
