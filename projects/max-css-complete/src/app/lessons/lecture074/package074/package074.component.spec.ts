import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package074Component } from './package074.component';

describe('Package074Component', () => {
  let component: Package074Component;
  let fixture: ComponentFixture<Package074Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package074Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
