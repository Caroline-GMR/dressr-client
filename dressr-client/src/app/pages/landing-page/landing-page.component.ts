import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  isLogin = true;
  isSignup = false;

  constructor() { }

  ngOnInit() {
  }

  handleLoginClick() {
    this.isLogin = true;
    this.isSignup = false;
  }
  
  handleSignupClick() {
    this.isSignup = true;
    this.isLogin = false;
  } 
}
