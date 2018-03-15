import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivingEnvelopeWallComponent } from './giving-envelope-wall.component';

describe('GivingEnvelopeWallComponent', () => {
  let component: GivingEnvelopeWallComponent;
  let fixture: ComponentFixture<GivingEnvelopeWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivingEnvelopeWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivingEnvelopeWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
