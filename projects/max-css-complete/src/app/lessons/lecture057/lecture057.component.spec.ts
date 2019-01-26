import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture057Component } from './lecture057.component';

describe('Lecture057Component', () => {
  let component: Lecture057Component;
  let fixture: ComponentFixture<Lecture057Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture057Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
