import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture028Component } from './lecture028.component';

describe('Lecture028Component', () => {
  let component: Lecture028Component;
  let fixture: ComponentFixture<Lecture028Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture028Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
