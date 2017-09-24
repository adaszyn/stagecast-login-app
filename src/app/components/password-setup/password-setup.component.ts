import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-password-setup',
  templateUrl: './password-setup.component.html',
  styleUrls: ['./password-setup.component.css']
})
export class PasswordSetupComponent implements OnInit {
  greeting: string = "Now you can choose a new password for your Stagecast account."
  public newPassword: string = '';
  public repeatedPassword: string = '';
  public password1: string = '';
  public isValid: boolean = false;
  public password2: string = '';
  public email: string = '';
  public error: string = '';
  
  constructor(public route: ActivatedRoute) {   }

  ngOnInit() {
      this.email = this.route.snapshot.queryParams.email;
  }

  onPassword1Change (value) {
    this.password1 = value
    this.validatePasswords()    
  }

  onPassword2Change (value) {
    this.password2 = value
    this.validatePasswords()
  }

  validatePasswords() {
    this.error = ""
    if (this.isPasswordCorrect()) {
     if (this.doPasswordsMatch()) {
      this.isValid = true
      return
     } else {
      this.error = "Passwords don't match";     
      this.isValid = false
      return 
     }
    }
    this.error = "Password needs to be longer"; 
    this.isValid = false
  }

  isPasswordCorrect () {
    return this.password1.length > 1
  }

  doPasswordsMatch () {
    return this.password2 === this.password1
  }

}
