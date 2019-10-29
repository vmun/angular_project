import { TestBed, async, inject } from '@angular/core/testing';

import { AuthcheckGuard } from './authcheck.guard';

describe('AuthcheckGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthcheckGuard]
    });
  });

  it('should ...', inject([AuthcheckGuard], (guard: AuthcheckGuard) => {
    expect(guard).toBeTruthy();
  }));
});
