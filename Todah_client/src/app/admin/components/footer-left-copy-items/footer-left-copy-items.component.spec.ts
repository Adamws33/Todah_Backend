import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLeftCopyItemsComponent } from './footer-left-copy-items.component';

describe('FooterLeftCopyItemsComponent', () => {
  let component: FooterLeftCopyItemsComponent;
  let fixture: ComponentFixture<FooterLeftCopyItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterLeftCopyItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLeftCopyItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
