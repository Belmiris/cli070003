import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture081Component } from './lecture081.component';

describe('Lecture081Component', () => {
  let component: Lecture081Component;
  let fixture: ComponentFixture<Lecture081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
