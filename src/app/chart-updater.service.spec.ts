import { TestBed } from '@angular/core/testing';

import { ChartUpdaterService } from './chart-updater.service';

describe('ChartUpdaterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartUpdaterService = TestBed.get(ChartUpdaterService);
    expect(service).toBeTruthy();
  });
});
