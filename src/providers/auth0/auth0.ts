import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the Auth0Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Auth0Provider {

  constructor(public http: HttpClient) {
    console.log('Hello Auth0Provider Provider');
  }

  login(username: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(
      'nope',
      { username, password, client_id: 'YOUR_CLIENT_ID' },
      { headers }
    );
  }
  post<T>(item: any){
    return this.http.post<T>('dummyURL', item);
  }
}
