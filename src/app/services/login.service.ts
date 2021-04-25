import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRoutingService } from './httpRouting.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: typedef
  login() {
    console.log('login is called');
    return this.httpClient.post('https://verify.flexm.com/api/token/authenticate', {
      Contact_Email: 'dotcodtest@gmail.com',
      password: 'admin1234'
    });
  }
}
