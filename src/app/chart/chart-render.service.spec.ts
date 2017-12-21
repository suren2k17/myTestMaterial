import { TestBed, inject } from '@angular/core/testing';

import { ChartRenderService } from './chart-render.service';

describe('ChartRenderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartRenderService]
    });
  });

  it('should be created', inject([ChartRenderService], (service: ChartRenderService) => {
    expect(service).toBeTruthy();
  }));
});
