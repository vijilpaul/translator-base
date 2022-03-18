import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  message = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
    ) {
    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.loginForm.invalid) {
      this.loading = false;
        return;
    }
    this.apiService.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value);
    setTimeout(() => {
      if (this.apiService.isLoggedIn()) {
        this.message = 'Login successfull';
        this.router.navigate(['/dashboard']);
      } else {
        this.loading = false;
        this.message = 'Username or password is incorrect.';
      }
    }, 500);
  }

}
