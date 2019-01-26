import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture061Component } from './lecture061.component';

describe('Lecture061Component', () => {
  let component: Lecture061Component;
  let fixture: ComponentFixture<Lecture061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
