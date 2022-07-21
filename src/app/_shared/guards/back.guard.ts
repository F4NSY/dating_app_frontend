import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root',
})
export class BackGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (
      this.accountService.isAuthenticated() &&
      (state.url === '/login' || state.url === '/register')
    ) {
      this.router.navigateByUrl('/app');
      return false;
    }
    if (!this.accountService.isAuthenticated() && state.url !== '/login') {
      this.router.navigateByUrl('/');
      return false;
    }

    return true;
  }
}
