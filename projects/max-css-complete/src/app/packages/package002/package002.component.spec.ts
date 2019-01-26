import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Package002Component } from './package002.component';

describe('Package002Component', () => {
  let component: Package002Component;
  let fixture: ComponentFixture<Package002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Package002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Package002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
