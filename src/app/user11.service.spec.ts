import { TestBed } from '@angular/core/testing';

import { User11Service } from './user11.service';

describe('User11Service', () => {
  let service: User11Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(User11Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
