import { TestBed, inject } from '@angular/core/testing';

import { FakeSessionService } from './fake-session.service';

describe('FakeSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeSessionService]
    });
  });

  it('should be created', inject([FakeSessionService], (service: FakeSessionService) => {
    expect(service).toBeTruthy();
  }));
});
