import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../_shared/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') form!: NgForm;
  request = {
    name: '',
    userName: '',
    password: '',
    confirmPassword: '',
  };
  isFormSubmitting = false;
  defaultEmailPattern = "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
  defaultPasswordPattern =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$';
  passwordType = 'text';
  confirmPasswordType = 'text';

  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit(): void {}

  register() {
    if (this.form.valid) {
      this.isFormSubmitting = true;
      this.accountService.register(this.request).subscribe({
        next: (response) => {
          this.isFormSubmitting = false;
          this.accountService.setAuthenticatedUser(response);
          this.router.navigateByUrl('/app');
        },
        error: (error) => {
          this.isFormSubmitting = false;
          console.log(error);
        },
      });
    }
  }
}
