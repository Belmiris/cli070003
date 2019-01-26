import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture033Component } from './lecture033.component';

describe('Lecture033Component', () => {
  let component: Lecture033Component;
  let fixture: ComponentFixture<Lecture033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
