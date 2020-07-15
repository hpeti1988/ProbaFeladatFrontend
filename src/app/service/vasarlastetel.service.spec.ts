import { TestBed } from '@angular/core/testing';

import { VasarlastetelService } from './vasarlastetel.service';

describe('VasarlastetelService', () => {
  let service: VasarlastetelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VasarlastetelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
