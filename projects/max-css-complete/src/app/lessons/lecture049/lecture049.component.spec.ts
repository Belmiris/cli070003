import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture049Component } from './lecture049.component';

describe('Lecture049Component', () => {
  let component: Lecture049Component;
  let fixture: ComponentFixture<Lecture049Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture049Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
