import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture055Component } from './lecture055.component';

describe('Lecture055Component', () => {
  let component: Lecture055Component;
  let fixture: ComponentFixture<Lecture055Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture055Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
