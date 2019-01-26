import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture040Component } from './lecture040.component';

describe('Lecture040Component', () => {
  let component: Lecture040Component;
  let fixture: ComponentFixture<Lecture040Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture040Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
