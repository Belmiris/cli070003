import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture064Component } from './lecture064.component';

describe('Lecture064Component', () => {
  let component: Lecture064Component;
  let fixture: ComponentFixture<Lecture064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
