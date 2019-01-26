import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture043Component } from './lecture043.component';

describe('Lecture043Component', () => {
  let component: Lecture043Component;
  let fixture: ComponentFixture<Lecture043Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture043Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
