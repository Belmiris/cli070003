import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson014Component } from './lesson014.component';

describe('Lesson014Component', () => {
  let component: Lesson014Component;
  let fixture: ComponentFixture<Lesson014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
