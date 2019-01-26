import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package083Component } from './package083.component';

describe('Package083Component', () => {
  let component: Package083Component;
  let fixture: ComponentFixture<Package083Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package083Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package083Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
