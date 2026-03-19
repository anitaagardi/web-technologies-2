import { TestBed } from '@angular/core/testing';

import { AnimalsService } from './animals.service';

describe('WatchesService', () => {
  let service: AnimalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
