import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhelpPage } from './myhelp.page';

describe('MyhelpPage', () => {
  let component: MyhelpPage;
  let fixture: ComponentFixture<MyhelpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyhelpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
