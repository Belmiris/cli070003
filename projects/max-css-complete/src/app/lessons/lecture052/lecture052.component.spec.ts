import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture052Component } from './lecture052.component';

describe('Lecture052Component', () => {
  let component: Lecture052Component;
  let fixture: ComponentFixture<Lecture052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
