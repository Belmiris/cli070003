import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture054Component } from './lecture054.component';

describe('Lecture054Component', () => {
  let component: Lecture054Component;
  let fixture: ComponentFixture<Lecture054Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture054Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
