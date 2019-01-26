import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture020Component } from './lecture020.component';

describe('Lecture020Component', () => {
  let component: Lecture020Component;
  let fixture: ComponentFixture<Lecture020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
