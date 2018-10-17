import { TestBed } from '@angular/core/testing';

import { OutfitPreviewService } from './outfit-preview.service';

describe('OutfitPreviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutfitPreviewService = TestBed.get(OutfitPreviewService);
    expect(service).toBeTruthy();
  });
});
