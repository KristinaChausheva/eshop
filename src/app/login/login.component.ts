import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
//import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  constructor(private auth: AuthService) { 
  }

  login() {
    this.auth.login();
    // this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
