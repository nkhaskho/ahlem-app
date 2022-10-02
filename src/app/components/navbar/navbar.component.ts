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
    this.goHome()
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['login'])
  }

  goHome() {
    if (localStorage.getItem('role')=='admin') {
      this.router.navigate(['dashboard'])
    } else {
      this.router.navigate(['/'])
    }
  }

}
