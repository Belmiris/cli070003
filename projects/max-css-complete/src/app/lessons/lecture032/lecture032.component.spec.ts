import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture032Component } from './lecture032.component';

describe('Lecture032Component', () => {
  let component: Lecture032Component;
  let fixture: ComponentFixture<Lecture032Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture032Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture032Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
