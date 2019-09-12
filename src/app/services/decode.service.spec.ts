import { TestBed } from '@angular/core/testing';

import { DecodeService } from './decode.service';

describe('DecodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DecodeService = TestBed.get(DecodeService);
    expect(service).toBeTruthy();
  });
});
