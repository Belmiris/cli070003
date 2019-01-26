import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture038Component } from './lecture038.component';

describe('Lecture038Component', () => {
  let component: Lecture038Component;
  let fixture: ComponentFixture<Lecture038Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture038Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
