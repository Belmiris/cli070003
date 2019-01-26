import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture030Component } from './lecture030.component';

describe('Lecture030Component', () => {
  let component: Lecture030Component;
  let fixture: ComponentFixture<Lecture030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture030Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
