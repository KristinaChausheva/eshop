import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
// import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 import { Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators'; 
//import 'npm:rxjs@5.0.0-beta.12/add/operator/map'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth:AuthService, private router: Router) { }

  canActivate() {
    return this.auth.user$.map(user => {
      if (user) return true;

      this.router.navigate(['/login']);
      return false;
    })
  }
}
