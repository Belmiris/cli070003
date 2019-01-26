import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture076Component } from './lecture076.component';

describe('Lecture076Component', () => {
  let component: Lecture076Component;
  let fixture: ComponentFixture<Lecture076Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture076Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
