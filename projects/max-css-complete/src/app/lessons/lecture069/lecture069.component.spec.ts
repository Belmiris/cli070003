import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture069Component } from './lecture069.component';

describe('Lecture069Component', () => {
  let component: Lecture069Component;
  let fixture: ComponentFixture<Lecture069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
