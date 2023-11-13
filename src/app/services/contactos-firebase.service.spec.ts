import { TestBed } from '@angular/core/testing';

import { ContactosFirebaseService } from './contactos-firebase.service';

describe('ContactosFirebaseService', () => {
  let service: ContactosFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactosFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
