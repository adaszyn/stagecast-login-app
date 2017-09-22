import { Component, OnInit } from '@angular/core';

const EMAIL_REGEX  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  public greeting: string = 'No worries! Enter your email and we will send you a link to reset your password.';
  public isValid: boolean = false;

  constructor() {}

  ngOnInit() {}
  validateEmail(email) {
    return EMAIL_REGEX.test(email);
  }

  emailChanged({target: {value}}) {
    if (this.validateEmail(value)) {
      (<any>window)._email = value; // feels bad man.
      this.isValid = true
    } else {
      this.isValid = false
    }
  }
}
