import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package080Component } from './package080.component';

describe('Package080Component', () => {
  let component: Package080Component;
  let fixture: ComponentFixture<Package080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
