import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture066Component } from './lecture066.component';

describe('Lecture066Component', () => {
  let component: Lecture066Component;
  let fixture: ComponentFixture<Lecture066Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture066Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
