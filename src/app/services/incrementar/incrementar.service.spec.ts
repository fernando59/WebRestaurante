import { TestBed } from '@angular/core/testing';

import { IncrementarService } from './incrementar.service';

describe('IncrementarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncrementarService = TestBed.get(IncrementarService);
    expect(service).toBeTruthy();
  });
});
