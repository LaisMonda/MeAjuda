import { TestBed } from '@angular/core/testing';

import { DenunciaTerceirosService } from './denuncia-terceiros.service';

describe('DenunciaTerceirosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DenunciaTerceirosService = TestBed.get(DenunciaTerceirosService);
    expect(service).toBeTruthy();
  });
});
