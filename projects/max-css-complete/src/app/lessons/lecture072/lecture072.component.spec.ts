import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture072Component } from './lecture072.component';

describe('Lecture072Component', () => {
  let component: Lecture072Component;
  let fixture: ComponentFixture<Lecture072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
