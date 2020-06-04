import { TestBed } from '@angular/core/testing';

import { LoanprogramsService } from './loanprograms.service';

describe('LoanprogramsService', () => {
  let service: LoanprogramsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanprogramsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
