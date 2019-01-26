import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package085Component } from './package085.component';

describe('Package085Component', () => {
  let component: Package085Component;
  let fixture: ComponentFixture<Package085Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package085Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
