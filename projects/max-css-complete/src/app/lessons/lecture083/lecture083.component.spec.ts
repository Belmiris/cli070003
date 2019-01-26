import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture083Component } from './lecture083.component';

describe('Lecture083Component', () => {
  let component: Lecture083Component;
  let fixture: ComponentFixture<Lecture083Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture083Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture083Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
