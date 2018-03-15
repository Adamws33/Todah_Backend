import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOfUseItemsComponent } from './terms-of-use-items.component';

describe('TermsOfUseItemsComponent', () => {
  let component: TermsOfUseItemsComponent;
  let fixture: ComponentFixture<TermsOfUseItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsOfUseItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsOfUseItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
