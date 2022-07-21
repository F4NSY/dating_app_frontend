import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient, private router: Router) {}

  login(request: any) {
    return this.http.post(`${environment.baseUrl}account/login`, request);
  }

  register(request: any) {
    return this.http.post(`${environment.baseUrl}account/register`, request);
  }

  setAuthenticatedUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  isAuthenticated() {
    return !!localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/');
  }
}
