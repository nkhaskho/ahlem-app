import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appStorage = localStorage;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['login'])
  }

}
