import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const AUTH_API = 'https://immense-citadel-91115.herokuapp.com/api/Users/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(credentials): Observable<any> {
    return this.http.post<any>(AUTH_API, credentials);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  isAuthenticated(): boolean {
    // !! transforme tout en booléen
    // Si c'est une chaine vide ou null ou 0 ou undefined ou NaN elle retrourne false
    // sinon elle return true
    return !!localStorage.getItem('token');
  }
}
