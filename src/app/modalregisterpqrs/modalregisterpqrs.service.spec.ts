import { TestBed } from '@angular/core/testing';

import { ModalregisterpqrsService } from './modalregisterpqrs.service';

describe('ModalregisterpqrsService', () => {
  let service: ModalregisterpqrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalregisterpqrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
