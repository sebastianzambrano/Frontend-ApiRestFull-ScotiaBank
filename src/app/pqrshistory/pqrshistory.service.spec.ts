import { TestBed } from '@angular/core/testing';

import { PqrshistoryService } from './pqrshistory.service';

describe('PqrshistoryService', () => {
  let service: PqrshistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PqrshistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
