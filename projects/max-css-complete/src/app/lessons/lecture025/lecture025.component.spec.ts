import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture025Component } from './lecture025.component';

describe('Lecture025Component', () => {
  let component: Lecture025Component;
  let fixture: ComponentFixture<Lecture025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
