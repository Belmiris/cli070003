import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture019Component } from './lecture019.component';

describe('Lecture019Component', () => {
  let component: Lecture019Component;
  let fixture: ComponentFixture<Lecture019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
