import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture086Component } from './lecture086.component';

describe('Lecture086Component', () => {
  let component: Lecture086Component;
  let fixture: ComponentFixture<Lecture086Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture086Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
