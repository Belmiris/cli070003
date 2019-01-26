import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture041Component } from './lecture041.component';

describe('Lecture041Component', () => {
  let component: Lecture041Component;
  let fixture: ComponentFixture<Lecture041Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture041Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
