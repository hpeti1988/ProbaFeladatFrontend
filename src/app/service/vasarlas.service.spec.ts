import { TestBed } from '@angular/core/testing';

import { VasarlasService } from './vasarlas.service';

describe('VasarlasService', () => {
  let service: VasarlasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VasarlasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
