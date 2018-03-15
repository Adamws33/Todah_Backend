import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivingDonateComponent } from './giving-donate.component';

describe('GivingDonateComponent', () => {
  let component: GivingDonateComponent;
  let fixture: ComponentFixture<GivingDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivingDonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivingDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
