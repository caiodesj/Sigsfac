import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { from, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  currentUser$ = authState(this.auth);

  constructor(private auth: Auth, private httpClient: HttpClient) {}

  signIn(credentials: { email: string; password: string }): Observable<any> {
    console.log(credentials);
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.httpClient
      .post(
        `https://sigsfac-go-linux.azurewebsites.net/api/signin`,
        credentials,
        { headers: headers }
      )
      .pipe(
        switchMap((response: any) => {
          // Return a new observable with the response
          return of(response);
        })
      );
  }

  isLogged(): Observable<any> {
    return this.currentUser$;
  }

  login(username: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  signUp(name: string, email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    return from(this.auth.signOut());
  }
}
