import { TestBed } from '@angular/core/testing';

import { ServiceBulletinService } from './service-bulletin.service';

describe('ServiceBulletinService', () => {
  let service: ServiceBulletinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBulletinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
