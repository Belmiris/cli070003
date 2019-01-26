import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture039Component } from './lecture039.component';

describe('Lecture039Component', () => {
  let component: Lecture039Component;
  let fixture: ComponentFixture<Lecture039Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture039Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
