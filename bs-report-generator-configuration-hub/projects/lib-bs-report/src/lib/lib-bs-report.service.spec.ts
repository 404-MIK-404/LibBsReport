import { TestBed } from '@angular/core/testing';

import { LibBsReportService } from './lib-bs-report.service';

describe('LibBsReportService', () => {
  let service: LibBsReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibBsReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
