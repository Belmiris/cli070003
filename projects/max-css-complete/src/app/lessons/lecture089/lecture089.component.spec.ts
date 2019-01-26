import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture089Component } from './lecture089.component';

describe('Lecture089Component', () => {
  let component: Lecture089Component;
  let fixture: ComponentFixture<Lecture089Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture089Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
