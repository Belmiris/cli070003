import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson012Component } from './lesson012.component';

describe('Lesson012Component', () => {
  let component: Lesson012Component;
  let fixture: ComponentFixture<Lesson012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
