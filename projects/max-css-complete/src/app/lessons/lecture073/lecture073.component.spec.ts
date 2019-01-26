import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture073Component } from './lecture073.component';

describe('Lecture073Component', () => {
  let component: Lecture073Component;
  let fixture: ComponentFixture<Lecture073Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture073Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
