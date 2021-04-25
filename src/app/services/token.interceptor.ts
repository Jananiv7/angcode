import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HeaderService } from "./header.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
constructor(private headerService:HeaderService, private router:Router){}
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request);
    return next.handle(this.setHeaders(request)).pipe(catchError((err) => {
       console.log(err);
        if (err instanceof HttpErrorResponse && err.status === 409) {
          // If 409 error returned ,thwn we handle it.
         
          this.router.navigate(['/login']);
          return throwError(err);
        }
        return throwError(err);
      }));

}
/**
   * Method which is used to set the headers for the request.
   * @param request Which is used to define the request of the url.
   */
 setHeaders(request: HttpRequest<any>) {
    // To get the headers for the given url
    const headers = this.headerService.getHeaders(request.url);
    // Add the headers to the cloned request and return it.
    return headers ? request.clone({
      setHeaders: headers
    }) : request;
  }
}