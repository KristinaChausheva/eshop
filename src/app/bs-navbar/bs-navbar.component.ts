import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
//import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase';
//import { Observable } from 'rxjs/Observable';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser;

  constructor(private auth: AuthService) {
    auth.appUser$
      .subscribe(appUser => this.appUser = appUser); // Subscribing here to avoid using the async pipe in the html template that causes infinite loop
  }

  logout() {
    this.auth.logout();
  }
}
