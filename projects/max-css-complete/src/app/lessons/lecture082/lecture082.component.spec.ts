import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture082Component } from './lecture082.component';

describe('Lecture082Component', () => {
  let component: Lecture082Component;
  let fixture: ComponentFixture<Lecture082Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture082Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
