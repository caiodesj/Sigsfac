import { Injectable, Injector } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  /**
   * Constructor
   */
  constructor(private _authService: AuthService, private _router: Router) {}

  /**
   * Intercept
   *
   * @param req
   * @param next
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request object
    let newReq = req.clone();

    // Request
    // If the access token didn't expire, add the Authorization header.
    // We won't add the Authorization header if the access token expired.
    // This will force the server to return a "401 Unauthorized" response
    // for the protected API routes which our response interceptor will
    // catch and delete the access token from the local storage while logging
    // the user out from the app.

    // Response
    return next.handle(this.setHeaders(newReq)).pipe(
      catchError((response: any) => {
        //         if( response instanceof HttpErrorResponse && response.error.status == 401){
        //   // Sign out
        //   this._authService.signOut();

        //   // Reload the app
        //   location.reload();
        // }

        if (
          response.error &&
          response.error === 'Error' &&
          response.description === 'No Token Found'
        ) {
          // Sign out
          this._authService.signOut();

          // Reload the app
          location.reload();
        }

        return throwError(response);
      })
    );
  }

  /**
   * That function is used to set headers keys
   * @param request
   * @returns
   */
  setHeaders(request: HttpRequest<any>): HttpRequest<any> {
    let headers = new HttpHeaders().set('token', this._authService.accessToken);

    return request.clone({ headers: headers });
  }
}
