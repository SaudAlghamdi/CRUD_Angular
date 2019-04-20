import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {


 // @ViewChild(LoginComponent) child;

  public isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  ngAfterViewInit() {
    //this.isLoggedIn = this.child.isLoggedIn;
  }

  logout(){
    this.isLoggedIn = false;
    sessionStorage.clear();
    this.router.navigateByUrl('/login');

  }

}
