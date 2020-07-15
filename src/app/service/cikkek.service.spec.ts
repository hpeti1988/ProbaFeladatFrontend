import { TestBed } from '@angular/core/testing';

import { CikkekService } from './cikkek.service';

describe('CikkekService', () => {
  let service: CikkekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CikkekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
