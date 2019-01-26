import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture088Component } from './lecture088.component';

describe('Lecture088Component', () => {
  let component: Lecture088Component;
  let fixture: ComponentFixture<Lecture088Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture088Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
