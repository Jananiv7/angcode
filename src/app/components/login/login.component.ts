import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpRoutingService } from 'src/app/services/httpRouting.service';
import { HeaderService } from 'src/app/services/header.service';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit,OnDestroy {
/**
 * Variable which is used to subscribe and unsubscribe
 */
 subscriptionObj = {};
 loginForm: FormGroup;
  constructor(public snackBar: MatSnackBar,
              private router: Router,
              private httpRoutingService: HttpRoutingService,
              private headerService: HeaderService, private loginService: LoginService) {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);
  hide = true;
  // tslint:disable-next-line: typedef
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email':new FormControl(null, Validators.required),
      'password':new FormControl(null, Validators.required)
    });
  }
  // tslint:disable-next-line: typedef
  submit() {
    // tslint:disable-next-line: deprecation
    this.signinUser();
  }
  // tslint:disable-next-line: typedef
  signinUser() {
    console.log({ email: this.email.value, password: this.password.value });
    this.subscriptionObj['login'] = this.loginService.login().subscribe(res => {
      if(res && res['data']){
        this.router.navigate(['/documentList']);
        console.log(res);
        this.headerService.setHeaders('default', 'access-token', res['data']);
      }
     
    },(err=>{
      console.log(err);
      this.snackBar.open('User Email not Exist or password is Incorrect', 'OK', {
            duration: 2000,
          });
    }));
    // tslint:disable-next-line: deprecation
    // return this.httpRoutingService.postMethod('v1/login', 
    // { email: this.email.value, password: this.password.value }).subscribe((res) => {
    //   // tslint:disable-next-line: no-string-literal
    //   if (res && res['accessToken'] && res['user']) {
    //     console.log(res);
    //     // Set the request headers with authentication details.
    //     // tslint:disable-next-line: no-string-literal
    //     this.headerService.setHeaders('default', 'Authorization', res['accessToken']);
    //     // localStorage.removeItem(email);
    //     // Store the token and user datails into session storage.
    //     sessionStorage.setItem('logInfo', JSON.stringify({
    //       // tslint:disable-next-line: no-string-literal
    //       refresh_token: res['refreshToken'] 
    //     }));
    //     // sessionStorage.setItem('jwt_token', JSON.stringify(res['accessToken']));
    //     // tslint:disable-next-line: no-string-literal
    //     sessionStorage.setItem('jwt_token', res['accessToken']);
    //     // Define the user model structure
    //     // tslint:disable-next-line: no-string-literal
    //     this.headerService.user.next(res['user']);
    //     // this.userRole = res['user'].userrole.rolename;
    //   }
    //   this.router.navigate(['/documentList']);
    //   // tslint:disable-next-line: no-string-literal
    //   return res['user'];
    // }, ((err) => {
    //   this.snackBar.open('User Email not Exist or password is Incorrect', 'OK', {
    //     duration: 2000,
    //   });
    // }));
  }
  ngOnDestroy() {
    if (this.subscriptionObj) {
      for (const subObj in this.subscriptionObj) {
        if (this.subscriptionObj[subObj]) {
          this.subscriptionObj[subObj].unsubscribe();
        }
      }
    }
  }
}
