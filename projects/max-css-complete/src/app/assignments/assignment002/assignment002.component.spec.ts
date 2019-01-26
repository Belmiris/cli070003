import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment002Component } from './assignment002.component';

describe('Assignment002Component', () => {
  let component: Assignment002Component;
  let fixture: ComponentFixture<Assignment002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
