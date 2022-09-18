import { FormResponse } from './../../models/form-response';
import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/models/login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new LoginForm();
  formResponse = new FormResponse();

  constructor() { }

  ngOnInit(): void {
  }

  login() {}

}
