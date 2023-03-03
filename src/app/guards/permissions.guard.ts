import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PermissionsGuard implements CanActivate {
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.hasUser()) {
      return true;
    }
    // redirect to login
    alert('You need to login first');
    return false;
  }

  hasUser(): boolean {
    return false;
  }
}
