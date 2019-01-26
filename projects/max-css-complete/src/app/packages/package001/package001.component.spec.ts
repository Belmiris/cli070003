import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package001Component } from './package001.component';

describe('Package001Component', () => {
  let component: Package001Component;
  let fixture: ComponentFixture<Package001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
