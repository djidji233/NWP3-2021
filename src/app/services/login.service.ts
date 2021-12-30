import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs";
import {LoginResponse} from "../model";

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnDestroy {

  private readonly loginUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) {
  }

  ngOnDestroy(): void {
    this.logout()
  }

  login(email:string, password:string) {
    return this.http.post<LoginResponse>(this.loginUrl, {
      email: email,
      password: password
     }).subscribe(response => {
      console.log(response.jwt)
      localStorage.setItem('jwt', response.jwt)
    })
  }


  logout() {
    localStorage.removeItem("jwt")
  }
}
