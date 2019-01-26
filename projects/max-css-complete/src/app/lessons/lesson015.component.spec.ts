import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson015Component } from './lesson015.component';

describe('Lesson015Component', () => {
  let component: Lesson015Component;
  let fixture: ComponentFixture<Lesson015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
