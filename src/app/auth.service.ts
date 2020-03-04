import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { AppUser } from './models/app-user';
import { UserService } from './user.service'
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user$ = afAuth.authState;
  }

  login() {
    // Store the return URL in local storage
    const returnUrl = this.route.snapshot.queryParamMap.get('returnURL') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    // signInWithRedirect() takes an auth provider object
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    // uid is the property of the 'user' object is the user represented by firebase as part of authentication and not the user object stored in the database
    // We need to get the firebase 'user' object to read and read the actual application 'user' object from the database
    return this.user$.pipe(
      switchMap(user => {
        if (user)
          return this.userService.get(user.uid);
        else
          return of(null);
      })
    );
  }
}
