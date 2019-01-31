import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture095Component } from './lecture095.component';

describe('Lecture095Component', () => {
  let component: Lecture095Component;
  let fixture: ComponentFixture<Lecture095Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture095Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
