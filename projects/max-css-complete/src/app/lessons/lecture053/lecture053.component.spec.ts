import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture053Component } from './lecture053.component';

describe('Lecture053Component', () => {
  let component: Lecture053Component;
  let fixture: ComponentFixture<Lecture053Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture053Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
