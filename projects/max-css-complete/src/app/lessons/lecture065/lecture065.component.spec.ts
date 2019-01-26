import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture065Component } from './lecture065.component';

describe('Lecture065Component', () => {
  let component: Lecture065Component;
  let fixture: ComponentFixture<Lecture065Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture065Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
