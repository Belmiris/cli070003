import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package076Component } from './package076.component';

describe('Package076Component', () => {
  let component: Package076Component;
  let fixture: ComponentFixture<Package076Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package076Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
