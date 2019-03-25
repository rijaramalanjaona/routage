import { TestBed, inject } from '@angular/core/testing';

import { PommeService } from './pomme.service';

describe('PommeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PommeService]
    });
  });

  it('should be created', inject([PommeService], (service: PommeService) => {
    expect(service).toBeTruthy();
  }));
});
