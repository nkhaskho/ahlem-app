import { AuthService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appStorage = localStorage;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['login'])
  }

}
