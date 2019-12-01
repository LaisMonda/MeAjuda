import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposviolenciaPage } from './tiposviolencia.page';

describe('TiposviolenciaPage', () => {
  let component: TiposviolenciaPage;
  let fixture: ComponentFixture<TiposviolenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposviolenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposviolenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
