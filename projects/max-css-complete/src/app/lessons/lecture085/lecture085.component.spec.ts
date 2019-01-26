import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture085Component } from './lecture085.component';

describe('Lecture085Component', () => {
  let component: Lecture085Component;
  let fixture: ComponentFixture<Lecture085Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture085Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
