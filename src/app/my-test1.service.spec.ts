import { TestBed } from '@angular/core/testing';

import { MyTest1Service } from './my-test1.service';

describe('MyTest1Service', () => {
  let service: MyTest1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTest1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
