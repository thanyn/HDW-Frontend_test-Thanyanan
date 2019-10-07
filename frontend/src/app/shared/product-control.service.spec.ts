import { TestBed, inject } from '@angular/core/testing';

import { ProductControlService } from './product-control.service';

describe('ProductControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductControlService]
    });
  });

  it('should be created', inject([ProductControlService], (service: ProductControlService) => {
    expect(service).toBeTruthy();
  }));
});
