import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture067Component } from './lecture067.component';

describe('Lecture067Component', () => {
  let component: Lecture067Component;
  let fixture: ComponentFixture<Lecture067Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture067Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
