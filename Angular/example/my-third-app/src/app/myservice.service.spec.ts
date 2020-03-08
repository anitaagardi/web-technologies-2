import { TestBed } from '@angular/core/testing';

import { MyserviceService } from './myservice.service';

describe('MyserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyserviceService = TestBed.get(MyserviceService);
    expect(service).toBeTruthy();
  });
});
