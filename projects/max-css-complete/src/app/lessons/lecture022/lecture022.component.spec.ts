import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture022Component } from './lecture022.component';

describe('Lecture022Component', () => {
  let component: Lecture022Component;
  let fixture: ComponentFixture<Lecture022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
