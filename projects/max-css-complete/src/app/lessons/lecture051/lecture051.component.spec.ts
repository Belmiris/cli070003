import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture051Component } from './lecture051.component';

describe('Lecture051Component', () => {
  let component: Lecture051Component;
  let fixture: ComponentFixture<Lecture051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
