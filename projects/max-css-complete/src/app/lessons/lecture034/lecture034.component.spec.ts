import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture034Component } from './lecture034.component';

describe('Lecture034Component', () => {
  let component: Lecture034Component;
  let fixture: ComponentFixture<Lecture034Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture034Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
