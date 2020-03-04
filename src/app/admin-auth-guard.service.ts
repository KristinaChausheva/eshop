import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$.pipe(
        map(appUser => appUser.isAdmin) // Mapping App user observable to a boolean observable
    );
  }
}
  