import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture021Component } from './lecture021.component';

describe('Lecture021Component', () => {
  let component: Lecture021Component;
  let fixture: ComponentFixture<Lecture021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
