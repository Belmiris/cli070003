import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture035Component } from './lecture035.component';

describe('Lecture035Component', () => {
  let component: Lecture035Component;
  let fixture: ComponentFixture<Lecture035Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture035Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
