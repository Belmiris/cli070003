import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture090Component } from './lecture090.component';

describe('Lecture090Component', () => {
  let component: Lecture090Component;
  let fixture: ComponentFixture<Lecture090Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture090Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
