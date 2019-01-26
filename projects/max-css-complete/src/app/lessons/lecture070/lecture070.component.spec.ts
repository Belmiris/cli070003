import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture070Component } from './lecture070.component';

describe('Lecture070Component', () => {
  let component: Lecture070Component;
  let fixture: ComponentFixture<Lecture070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
