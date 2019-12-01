import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoPage } from './processo.page';

describe('ProcessoPage', () => {
  let component: ProcessoPage;
  let fixture: ComponentFixture<ProcessoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
