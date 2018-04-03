import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Auth0Provider } from "./auth0";
import { HttpRequest} from "@angular/common/http";

describe('Auth0Provider', () => {
  const responseForm = '<form />';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Auth0Provider]
    });
  });

  it('should be called with proper arguments', () => {
    const auth0Service = TestBed.get(Auth0Provider);
    const http = TestBed.get(HttpTestingController);
    let loginResponse;

    auth0Service.login('white', 'black').subscribe((response) => {
      loginResponse = response;
    });

    http.expectOne({
      url: 'nope',
      method: 'POST'
    }).flush(responseForm);
    expect(loginResponse).toEqual(responseForm);
  });

  it('should be called with proper arguments and headers plus body', () => {
    const auth0Service = TestBed.get(Auth0Provider);
    const http = TestBed.get(HttpTestingController);
    let loginResponse;

    auth0Service.login('white', 'black').subscribe((response) => {
      loginResponse = response;
    });

    http.expectOne((request: HttpRequest<any>) => {
      return request.method == 'POST'
        && request.url == 'nope'
        && JSON.stringify(request.body) === JSON.stringify({
          username: 'white', password: 'black', client_id: 'YOUR_CLIENT_ID'
        })
        && request.headers.get('Content-Type') === 'application/json';
    }).flush(responseForm);
    expect(loginResponse).toEqual(responseForm);
  });
});

describe('Auth0Provider', () => {
  let service: Auth0Provider;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Auth0Provider]
    });
    service = TestBed.get(Auth0Provider);
    httpMock = TestBed.get(HttpTestingController);
  });
  it('should post the correct data', () => {
    service.post<any>({firstname: 'firstName'}).subscribe((response) => {
      expect(response.firstname).toBe('firstName');
    });
    const req = httpMock.expectOne('dummyURL', 'post to api');
    expect(req.request.method).toBe('POST');
    req.flush({firstname: 'firstName'});
  });
  httpMock.verify();
});
