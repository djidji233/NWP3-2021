import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string;
  email: string;
  password: string;

  constructor(private loginService: LoginService) {
      this.token='';
      this.email='';
      this.password='';
  }

  ngOnInit(): void {

  }

  login(email: string, password: string) {
    console.log(email,password);
    this.loginService.login(email, password);
  }

}
