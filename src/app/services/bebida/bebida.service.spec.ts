import { TestBed } from '@angular/core/testing';

import { BebidaService } from './bebida.service';

describe('BebidaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BebidaService = TestBed.get(BebidaService);
    expect(service).toBeTruthy();
  });
});
