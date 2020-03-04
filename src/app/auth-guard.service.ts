import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
// import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 import { Router } from '@angular/router';
//import 'rxjs/add/operator/map';  <===this not work on anglular 8
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth:AuthService, private router: Router) { }

  canActivate() {
    return this.auth.user$.pipe(map(user => {
      if (user) return true;

      this.router.navigate(['/login']);
      return false;
    }))
  }
}
