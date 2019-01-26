import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture046Component } from './lecture046.component';

describe('Lecture046Component', () => {
  let component: Lecture046Component;
  let fixture: ComponentFixture<Lecture046Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture046Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
