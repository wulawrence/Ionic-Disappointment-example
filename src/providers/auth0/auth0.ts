import { HttpClient } from '@angular/common/http';
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

}
