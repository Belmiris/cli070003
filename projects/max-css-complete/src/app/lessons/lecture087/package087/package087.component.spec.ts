import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package087Component } from './package087.component';

describe('Package087Component', () => {
  let component: Package087Component;
  let fixture: ComponentFixture<Package087Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package087Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
