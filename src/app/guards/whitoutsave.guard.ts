import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WhitoutsaveGuard implements CanDeactivate<unknown> {
  canDeactivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.hasUser()) {
      return true;
    }

    return confirm('You have unsaved changes');
  }

  hasUser(): boolean {
    return false;
  }
}
