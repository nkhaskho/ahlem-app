import { Component, OnInit } from '@angular/core';
import { FormResponse } from 'src/app/models/form-response';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formResponse = new FormResponse();
  user = new User();

  constructor() { }

  ngOnInit(): void {
  }

  signUp() {}

}
