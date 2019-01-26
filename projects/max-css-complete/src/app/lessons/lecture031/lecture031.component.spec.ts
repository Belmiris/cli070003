import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture031Component } from './lecture031.component';

describe('Lecture031Component', () => {
  let component: Lecture031Component;
  let fixture: ComponentFixture<Lecture031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
