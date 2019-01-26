import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture087Component } from './lecture087.component';

describe('Lecture087Component', () => {
  let component: Lecture087Component;
  let fixture: ComponentFixture<Lecture087Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture087Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
