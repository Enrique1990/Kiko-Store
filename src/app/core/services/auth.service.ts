import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth: any;
  constructor(private authService: AngularFireAuth) {}

  createUser(email: string, password: string) {
    return this.authService.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.authService.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.authService.signOut();
  }

  hasUser() {
    return this.authService.authState;
  }
}
