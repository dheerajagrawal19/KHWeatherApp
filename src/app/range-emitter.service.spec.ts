import { TestBed } from '@angular/core/testing';

import { RangeEmitterService } from './range-emitter.service';

describe('RangeEmitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RangeEmitterService = TestBed.get(RangeEmitterService);
    expect(service).toBeTruthy();
  });
});
