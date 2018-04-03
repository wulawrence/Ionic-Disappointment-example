import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GithubGetterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubGetterProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GithubGetterProvider Provider');
  }

  getProfile(userName: string) {
    return this.http
      .get(`https://api.github.com/users/${userName}`);
  }
  postUser(){
  //   const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1
  //   }).subscribe(res => { console.log(res); }, err => { console.log("Error occured");
  //   });
  // };
}
