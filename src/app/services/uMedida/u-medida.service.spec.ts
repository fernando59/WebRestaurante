import { TestBed } from '@angular/core/testing';

import { UMedidaService } from './u-medida.service';

describe('UMedidaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UMedidaService = TestBed.get(UMedidaService);
    expect(service).toBeTruthy();
  });
});
