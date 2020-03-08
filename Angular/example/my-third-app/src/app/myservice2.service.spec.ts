import { TestBed } from '@angular/core/testing';

import { Myservice2Service } from './myservice2.service';

describe('Myservice2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Myservice2Service = TestBed.get(Myservice2Service);
    expect(service).toBeTruthy();
  });
});
