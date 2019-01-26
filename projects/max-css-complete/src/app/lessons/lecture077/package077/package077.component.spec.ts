import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package077Component } from './package077.component';

describe('Package077Component', () => {
  let component: Package077Component;
  let fixture: ComponentFixture<Package077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
