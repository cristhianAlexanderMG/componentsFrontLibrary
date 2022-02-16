import { TestBed } from '@angular/core/testing';

import { OrganizationCharService } from './organization-char.service';

describe('OrganizationCharService', () => {
  let service: OrganizationCharService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationCharService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
