import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture059Component } from './lecture059.component';

describe('Lecture059Component', () => {
  let component: Lecture059Component;
  let fixture: ComponentFixture<Lecture059Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture059Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
