import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public greeting:string = 'Welcome to this awesome login page!';
  constructor () { 
  }

  ngOnInit() {
  }

}
