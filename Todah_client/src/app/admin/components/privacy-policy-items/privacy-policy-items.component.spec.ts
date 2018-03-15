import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyItemsComponent } from './privacy-policy-items.component';

describe('PrivacyPolicyItemsComponent', () => {
  let component: PrivacyPolicyItemsComponent;
  let fixture: ComponentFixture<PrivacyPolicyItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
