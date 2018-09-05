import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service'
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthorizationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    console.log("AuthGuardService::checkLogin: "+ this.authService.isLoggedIn())


    if (this.authService.isLoggedIn()) { return true; }
      
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/signin']);
    return false;
  }
}
