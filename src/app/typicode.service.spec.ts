import { TestBed, inject } from '@angular/core/testing';

import { TypicodeService } from './typicode.service';

describe('TypicodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypicodeService]
    });
  });

  it('should be created', inject([TypicodeService], (service: TypicodeService) => {
    expect(service).toBeTruthy();
  }));
});
