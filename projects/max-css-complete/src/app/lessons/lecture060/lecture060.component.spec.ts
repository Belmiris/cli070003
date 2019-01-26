import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture060Component } from './lecture060.component';

describe('Lecture060Component', () => {
  let component: Lecture060Component;
  let fixture: ComponentFixture<Lecture060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
