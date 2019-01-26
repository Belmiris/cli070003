import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture084Component } from './lecture084.component';

describe('Lecture084Component', () => {
  let component: Lecture084Component;
  let fixture: ComponentFixture<Lecture084Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture084Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
