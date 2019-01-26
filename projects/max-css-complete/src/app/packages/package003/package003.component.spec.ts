import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package003Component } from './package003.component';

describe('Package003Component', () => {
  let component: Package003Component;
  let fixture: ComponentFixture<Package003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
