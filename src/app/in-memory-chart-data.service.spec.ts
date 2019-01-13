import { TestBed } from '@angular/core/testing';

import { InMemoryChartDataService } from './in-memory-chart-data.service';

describe('InMemoryChartDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryChartDataService = TestBed.get(InMemoryChartDataService);
    expect(service).toBeTruthy();
  });
});
