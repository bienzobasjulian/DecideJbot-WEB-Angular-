import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AngularFireModule } from '@angular/fire/compat';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 

  constructor(private angularFireAuth: AngularFireAuth) { }

  async register(email: string, password: string) {
    try {

      return await this.angularFireAuth.createUserWithEmailAndPassword(email, password);

    } catch (error) {
      return null;
    }
  }

  async login(email: string, password: string) {
    try {

      return await this.angularFireAuth.signInWithEmailAndPassword(email, password);

    } catch (error) {
      return null;
    }
  }

  async loginWithGoogle(email: string, password: string) {
    try {

      return await this.angularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

    } catch (error) {
      return null;
    }
  }

  getUserLogged() {
   
    return this.angularFireAuth.authState;
  }

  

  logOut(){
    this.angularFireAuth.signOut();
  }
}


