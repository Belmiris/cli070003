import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson011Component } from './lesson011.component';

describe('Lesson011Component', () => {
  let component: Lesson011Component;
  let fixture: ComponentFixture<Lesson011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
