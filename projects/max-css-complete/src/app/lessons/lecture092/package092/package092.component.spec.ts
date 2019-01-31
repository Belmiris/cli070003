import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package092Component } from './package092.component';

describe('Package092Component', () => {
  let component: Package092Component;
  let fixture: ComponentFixture<Package092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
