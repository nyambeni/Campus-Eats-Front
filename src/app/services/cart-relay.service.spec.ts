import { TestBed } from '@angular/core/testing';

import { CartRelayService } from './cart-relay.service';

describe('CartRelayService', () => {
  let service: CartRelayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartRelayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
