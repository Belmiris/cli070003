import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture044Component } from './lecture044.component';

describe('Lecture044Component', () => {
  let component: Lecture044Component;
  let fixture: ComponentFixture<Lecture044Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture044Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
