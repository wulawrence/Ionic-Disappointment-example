import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServiceproviderProvider} from "./serviceprovider";

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceproviderProvider]
    });
  });

  it('should get users', inject(
      [HttpTestingController, ServiceproviderProvider],
      (httpMock: HttpTestingController, serviceProvider: ServiceproviderProvider) => {
        const mockUsers = [
          { name: 'Bob', website: 'www.yessss.com' },
          { name: 'Juliette', website: 'nope.com' }
        ];

        serviceProvider.getData().subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockUsers);
          }
        });

        const mockReq = httpMock.expectOne(serviceProvider.url);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockUsers);

        httpMock.verify();
      }
    )
  );
});
