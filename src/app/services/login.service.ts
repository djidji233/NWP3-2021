import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: string | null;

  constructor() {
      this.token = localStorage.getItem('token');
  }

  setToken(tkn: string): void{
    this.token = tkn;
  }

  getToken(): string {
    return <string>this.token;
  }

  login(email:string,password:string){
    // pozove backend
    this.setToken('responseee')
  }

}
