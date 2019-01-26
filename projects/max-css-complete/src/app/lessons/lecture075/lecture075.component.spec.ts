import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture075Component } from './lecture075.component';

describe('Lecture075Component', () => {
  let component: Lecture075Component;
  let fixture: ComponentFixture<Lecture075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
