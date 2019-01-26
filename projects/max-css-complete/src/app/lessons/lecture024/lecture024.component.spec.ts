import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture024Component } from './lecture024.component';

describe('Lecture024Component', () => {
  let component: Lecture024Component;
  let fixture: ComponentFixture<Lecture024Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture024Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
