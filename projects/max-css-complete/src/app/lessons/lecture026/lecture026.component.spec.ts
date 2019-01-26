import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture026Component } from './lecture026.component';

describe('Lecture026Component', () => {
  let component: Lecture026Component;
  let fixture: ComponentFixture<Lecture026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
