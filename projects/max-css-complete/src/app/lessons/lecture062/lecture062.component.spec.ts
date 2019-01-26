import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture062Component } from './lecture062.component';

describe('Lecture062Component', () => {
  let component: Lecture062Component;
  let fixture: ComponentFixture<Lecture062Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture062Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
