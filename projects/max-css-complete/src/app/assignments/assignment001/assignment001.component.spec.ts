import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment001Component } from './assignment001.component';

describe('Assignment001Component', () => {
  let component: Assignment001Component;
  let fixture: ComponentFixture<Assignment001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
