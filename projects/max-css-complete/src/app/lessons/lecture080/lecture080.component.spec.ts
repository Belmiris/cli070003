import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture080Component } from './lecture080.component';

describe('Lecture080Component', () => {
  let component: Lecture080Component;
  let fixture: ComponentFixture<Lecture080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
