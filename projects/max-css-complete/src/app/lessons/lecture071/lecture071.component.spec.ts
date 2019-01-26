import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture071Component } from './lecture071.component';

describe('Lecture071Component', () => {
  let component: Lecture071Component;
  let fixture: ComponentFixture<Lecture071Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture071Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
