import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture027Component } from './lecture027.component';

describe('Lecture027Component', () => {
  let component: Lecture027Component;
  let fixture: ComponentFixture<Lecture027Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture027Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
