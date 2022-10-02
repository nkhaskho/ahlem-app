import { AuthService } from './../../services/auth/auth.service';
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

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.authenticate(this.loginForm).toPromise()
    .then(res => {
      this.authService.saveLoggedUser(res);
      this.router.navigate(['dashboard'])
    })
    .catch(err => this.formResponse.setError(err.error))
  }

}
