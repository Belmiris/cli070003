import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package075Component } from './package075.component';

describe('Package075Component', () => {
  let component: Package075Component;
  let fixture: ComponentFixture<Package075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
