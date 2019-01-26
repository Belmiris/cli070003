import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture045Component } from './lecture045.component';

describe('Lecture045Component', () => {
  let component: Lecture045Component;
  let fixture: ComponentFixture<Lecture045Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture045Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
