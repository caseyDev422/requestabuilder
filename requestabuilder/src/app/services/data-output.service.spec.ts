import { TestBed } from '@angular/core/testing';

import { DataOutputService } from './data-output.service';

describe('DataOutputService', () => {
  let service: DataOutputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataOutputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
