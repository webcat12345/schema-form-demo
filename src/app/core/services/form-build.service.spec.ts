import { TestBed, inject } from '@angular/core/testing';

import { FormBuildService } from './form-build.service';

describe('FormBuildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormBuildService]
    });
  });

  it('should be created', inject([FormBuildService], (service: FormBuildService) => {
    expect(service).toBeTruthy();
  }));
});
