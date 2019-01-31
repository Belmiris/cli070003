import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture092Component } from './lecture092.component';

describe('Lecture092Component', () => {
  let component: Lecture092Component;
  let fixture: ComponentFixture<Lecture092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
