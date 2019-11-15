import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherhelpPage } from './otherhelp.page';

describe('OtherhelpPage', () => {
  let component: OtherhelpPage;
  let fixture: ComponentFixture<OtherhelpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherhelpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherhelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
