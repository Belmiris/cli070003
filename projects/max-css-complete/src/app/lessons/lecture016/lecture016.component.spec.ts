import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture016Component } from './lecture016.component';

describe('Lecture016Component', () => {
  let component: Lecture016Component;
  let fixture: ComponentFixture<Lecture016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
