import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToSucceedComponent } from './how-to-succeed.component';

describe('HowToSucceedComponent', () => {
  let component: HowToSucceedComponent;
  let fixture: ComponentFixture<HowToSucceedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToSucceedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToSucceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
