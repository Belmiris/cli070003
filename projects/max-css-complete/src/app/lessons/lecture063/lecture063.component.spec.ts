import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture063Component } from './lecture063.component';

describe('Lecture063Component', () => {
  let component: Lecture063Component;
  let fixture: ComponentFixture<Lecture063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
