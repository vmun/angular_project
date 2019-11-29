import { TestBed } from '@angular/core/testing';

import { DataPassService } from './datapass.service';

describe('DatapassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataPassService = TestBed.get(DataPassService);
    expect(service).toBeTruthy();
  });
});
