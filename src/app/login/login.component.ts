import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../_shared/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') form!: NgForm;
  request = {
    userName: '',
    password: '',
    isRememberMe: false,
  };
  isFormSubmitting = false;
  defaultEmailPattern = "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
  passwordType = 'text';

  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit(): void {}

  login() {
    if (this.form.valid) {
      this.isFormSubmitting = true;
      this.accountService.login(this.request).subscribe({next: (response) => {
        this.isFormSubmitting = false;
        this.accountService.setAuthenticatedUser(response);
        this.router.navigateByUrl('/app');
      }, error: (error) => {
        this.isFormSubmitting = false;
        console.log(error);
      }})
    }
  }
}
