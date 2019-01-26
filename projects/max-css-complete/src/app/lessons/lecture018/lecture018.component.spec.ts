import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture018Component } from './lecture018.component';

describe('Lecture018Component', () => {
  let component: Lecture018Component;
  let fixture: ComponentFixture<Lecture018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
