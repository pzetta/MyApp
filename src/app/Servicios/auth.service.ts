import { Injectable } from '@angular/core';

@Injectable({
<<<<<<< Updated upstream
  providedIn: 'root',
})
export class AuthService {
  private static isLogged: boolean = false;
  constructor() {}

  login(user: string, pass: string): boolean {
    if ((user == 'sevian') && pass == '1234') {
=======
  providedIn: 'root'
})
export class AuthService {
  private static isLogged: boolean = false; 
  constructor() { }

  login(user: String, pass: string): boolean {
    if (
      (user == 'j.riquelme' || user == 'jo.riquelme@duocuc.cl') &&
      pass == 'pass1234'
    ) {
>>>>>>> Stashed changes
      AuthService.isLogged = true;
      return true;
    } else {
      return false;
    }
  }

<<<<<<< Updated upstream
  isConnected():boolean{
    return AuthService.isLogged;
  }

  logout(){
=======
  isConnected(): boolean {
    return AuthService.isLogged;
  }

  logout() {
>>>>>>> Stashed changes
    AuthService.isLogged = false;
  }
}
