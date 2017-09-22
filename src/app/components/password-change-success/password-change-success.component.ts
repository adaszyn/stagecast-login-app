import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-change-success',
  templateUrl: './password-change-success.component.html',
  styleUrls: ['./password-change-success.component.css']
})
export class PasswordChangeSuccessComponent implements OnInit {
  successMessage: string;
  ngOnInit() {
    const email = (<any>window)._email;
    if (email) {
      this.successMessage = `The password for ${email} has been successfully changed.`;
    } else {
      this.successMessage = 'Something went wrong!';
    }
  }

}

