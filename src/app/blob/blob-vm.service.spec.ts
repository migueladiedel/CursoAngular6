import { TestBed, inject } from '@angular/core/testing';

import { BlobVMService } from './blob-vm.service';

describe('PersonasVMService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlobVMService]
    });
  });

  it('should be created', inject([BlobVMService], (service: BlobVMService) => {
    expect(service).toBeTruthy();
  }));
});
