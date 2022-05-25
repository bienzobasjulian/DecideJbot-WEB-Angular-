import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AngularFireModule } from '@angular/fire/compat';
import { User } from '@firebase/auth';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user !: User;

 

  constructor(private angularFireAuth: AngularFireAuth) { }

  async register(email: string, password: string) {
    try {

      return await this.angularFireAuth.createUserWithEmailAndPassword(email, password);

    } catch (error) {
      return null;
    }
  }

  async login(email: string, password: string)  {
    try {
      const { user } = await this.angularFireAuth.signInWithEmailAndPassword(
        email,
        password
      );
     
      return user;
    } catch (error) {
      console.log(error);
      return null ;
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

  getCurrentUser() {
    return this.angularFireAuth.authState.pipe(first()).toPromise();
  }

  

  logOut(){
    this.angularFireAuth.signOut();
  }
}


