import { FormResponse } from './../../models/form-response';
import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/models/login-form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new LoginForm();
  formResponse = new FormResponse();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.email == 'admin') {
      localStorage.setItem('role', 'admin');
      this.router.navigate(['dashboard'])
    }
  }

}
