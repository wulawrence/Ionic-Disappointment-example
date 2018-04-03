import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from "rxjs/Observable";

/*
  Generated class for the ServiceproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceproviderProvider {

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(public http: HttpClient ) {
    console.log('I am stupid');
  }
  getData(){
    const req = new HttpRequest('GET', this.url, {
      reportProgress: true
    });
    return this.http.request(req);
  }

}
