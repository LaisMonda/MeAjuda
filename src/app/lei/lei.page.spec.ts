import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeiPage } from './lei.page';

describe('LeiPage', () => {
  let component: LeiPage;
  let fixture: ComponentFixture<LeiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
