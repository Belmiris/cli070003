import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture042Component } from './lecture042.component';

describe('Lecture042Component', () => {
  let component: Lecture042Component;
  let fixture: ComponentFixture<Lecture042Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture042Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
