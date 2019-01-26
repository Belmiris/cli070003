import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package086Component } from './package086.component';

describe('Package086Component', () => {
  let component: Package086Component;
  let fixture: ComponentFixture<Package086Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package086Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
