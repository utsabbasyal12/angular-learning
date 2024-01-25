import { TestBed } from '@angular/core/testing';

import { WholesalerAPIService } from './wholesaler-api.service';

describe('WholesalerAPIService', () => {
  let service: WholesalerAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WholesalerAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
