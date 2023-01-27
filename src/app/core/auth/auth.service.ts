import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  private _authenticated: boolean = false;

  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for access token
   */
  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  set refreshToken(refreshToken: string) {
    localStorage.setItem('refreshToken', refreshToken);
  }

  get refreshToken(): string {
    return localStorage.getItem('refreshToken') ?? '';
  }

  set expirationTime(value: string) {
    localStorage.setItem('expirationTime', value);
  }

  get expirationTimeToken(): string {
    return localStorage.getItem('expirationTime') ?? '';
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Forgot password
   *
   * @param username
   */
  forgotPassword(username: string): Observable<any> {
    return this._httpClient.post(
      `${environment.hostApi}/users/forgot-password`,
      {
        username: username,
      }
    );
  }

  /**
   * Reset password
   *
   * @param password
   */
  resetPassword(password: string, token: string): Observable<any> {
    return this._httpClient.post(
      `${environment.hostApi}/users/reset-password`,
      {
        password: password,
        token_reset: token,
      }
    );
  }

  /**
   * Sign in
   *
   * @param credentials
   */
  signIn(credentials: { email: string; password: string }): Observable<any> {
    console.log(credentials);

    return this._httpClient
      .post(`${environment.hostApi}/signin`, credentials)
      .pipe(
        switchMap((response: any) => {
          // Store the access token in the local storage
          this.accessToken = response.token;

          // Set the authenticated flag to true
          this._authenticated = true;
          return of(response);
        })
      );
  }

  /**
   * Refresh token expired
   */
  refreshTokenApi(): Observable<any> {
    // Renew token
    return this._httpClient.post(`${environment.hostApi}/refresh`, {}).pipe(
      catchError(() => {
        // Return false
        return of(false);
      }),
      switchMap((response: any) => {
        // Store the access token in the local storage
        this.accessToken = response.token.token;

        // Set the authenticated flag to true
        this._authenticated = true;

        // Return true
        return of(true);
      })
    );
  }

  /**
   * Sign out
   */
  signOut(): Observable<any> {
    // Remove the access token from the local storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expirationTime');

    // Set the authenticated flag to false
    this._authenticated = false;

    // Return the observable
    return of(true);
  }

  /**
   * Sign up
   *
   * @param user
   */
  signUp(user: {
    name: string;
    email: string;
    password: string;
    company: string;
  }): Observable<any> {
    return this._httpClient.post('auth/sign-up', user);
  }

  /**
   * Unlock session
   *
   * @param credentials
   */
  unlockSession(credentials: {
    email: string;
    password: string;
  }): Observable<any> {
    return this._httpClient.post('auth/unlock-session', credentials);
  }

  /**
   * Check the authentication status
   */
  check(): Observable<boolean> {
    // Check the access token availability
    if (!this.accessToken) {
      return of(false);
    }
    // Check if the user is logged in
    if (this._authenticated) {
      return of(true);
    }

    return of(true);
  }

  /**
   * Check allowed permission of access in specific component
   * @param payload
   */
  signInPermissionOfComponent(payload: {
    username: string;
    password: string;
    component: string;
  }): Observable<any> {
    return this._httpClient
      .post(`${environment.hostApi}/rule/allowed`, payload)
      .pipe(
        switchMap((response: any) => {
          // Return a new observable with the response
          return of(response);
        })
      );
  }
}
