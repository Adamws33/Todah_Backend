import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCopyItemsComponent } from './footer-copy-items.component';

describe('FooterCopyItemsComponent', () => {
  let component: FooterCopyItemsComponent;
  let fixture: ComponentFixture<FooterCopyItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterCopyItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCopyItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
