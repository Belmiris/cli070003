import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson013Component } from './lesson013.component';

describe('Lesson013Component', () => {
  let component: Lesson013Component;
  let fixture: ComponentFixture<Lesson013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
