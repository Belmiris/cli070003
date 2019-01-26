import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture037Component } from './lecture037.component';

describe('Lecture037Component', () => {
  let component: Lecture037Component;
  let fixture: ComponentFixture<Lecture037Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture037Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
