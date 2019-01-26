import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture017Component } from './lecture017.component';

describe('Lecture017Component', () => {
  let component: Lecture017Component;
  let fixture: ComponentFixture<Lecture017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
