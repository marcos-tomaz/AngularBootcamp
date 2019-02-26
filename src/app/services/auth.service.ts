import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import * as firebase from 'firebase/app'
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements CanActivate{

  constructor(private angularFirebaseAuth: AngularFireAuth) { }

  canActivate(): boolean{
    console.log('CanActivate was called');
    console.log(this.angularFirebaseAuth);

    return true;
  }

  login(){
    this.angularFirebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.angularFirebaseAuth.auth.signOut();
  }

}