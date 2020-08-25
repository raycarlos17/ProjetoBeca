/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DropzoneService } from './dropzone.service';

describe('Service: Dropzone', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropzoneService]
    });
  });

  it('should ...', inject([DropzoneService], (service: DropzoneService) => {
    expect(service).toBeTruthy();
  }));
});
