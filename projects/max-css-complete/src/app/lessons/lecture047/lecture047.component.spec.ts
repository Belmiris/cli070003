import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture047Component } from './lecture047.component';

describe('Lecture047Component', () => {
  let component: Lecture047Component;
  let fixture: ComponentFixture<Lecture047Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture047Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
