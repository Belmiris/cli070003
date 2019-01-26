import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture050Component } from './lecture050.component';

describe('Lecture050Component', () => {
  let component: Lecture050Component;
  let fixture: ComponentFixture<Lecture050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
