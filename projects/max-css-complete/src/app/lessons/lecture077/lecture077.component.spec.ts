import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture077Component } from './lecture077.component';

describe('Lecture077Component', () => {
  let component: Lecture077Component;
  let fixture: ComponentFixture<Lecture077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
