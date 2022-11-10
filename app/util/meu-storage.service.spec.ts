import { TestBed } from '@angular/core/testing';

import { MeuStorageService } from './meu-storage.service';

describe('MeuStorageService', () => {
  let service: MeuStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeuStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
