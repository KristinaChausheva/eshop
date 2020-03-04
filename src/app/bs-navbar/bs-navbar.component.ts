import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
//import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  //user$: Observable<firebase.User>;

  constructor(public auth: AuthService) { 
    //this.user$ = auth.authState;
    
  }

  logout() {
    this.auth.logout();
    //this.afAuth.auth.signOut();
  }
}
