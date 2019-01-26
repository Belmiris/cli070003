import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture074Component } from './lecture074.component';

describe('Lecture074Component', () => {
  let component: Lecture074Component;
  let fixture: ComponentFixture<Lecture074Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture074Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
