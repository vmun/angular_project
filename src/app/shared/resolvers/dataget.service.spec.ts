import { TestBed } from '@angular/core/testing';

import { DatagetService } from './dataget.service';

describe('DatagetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatagetService = TestBed.get(DatagetService);
    expect(service).toBeTruthy();
  });
});
