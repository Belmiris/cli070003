import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture091Component } from './lecture091.component';

describe('Lecture091Component', () => {
  let component: Lecture091Component;
  let fixture: ComponentFixture<Lecture091Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture091Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
