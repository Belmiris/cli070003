import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture029Component } from './lecture029.component';

describe('Lecture029Component', () => {
  let component: Lecture029Component;
  let fixture: ComponentFixture<Lecture029Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture029Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
