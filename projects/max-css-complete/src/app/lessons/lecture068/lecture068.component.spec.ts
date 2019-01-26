import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture068Component } from './lecture068.component';

describe('Lecture068Component', () => {
  let component: Lecture068Component;
  let fixture: ComponentFixture<Lecture068Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture068Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
