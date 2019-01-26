import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture023Component } from './lecture023.component';

describe('Lecture023Component', () => {
  let component: Lecture023Component;
  let fixture: ComponentFixture<Lecture023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
