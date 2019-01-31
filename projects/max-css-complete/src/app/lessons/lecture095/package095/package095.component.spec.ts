import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package095Component } from './package095.component';

describe('Package095Component', () => {
  let component: Package095Component;
  let fixture: ComponentFixture<Package095Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package095Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
