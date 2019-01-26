import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package084Component } from './package084.component';

describe('Package084Component', () => {
  let component: Package084Component;
  let fixture: ComponentFixture<Package084Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package084Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
