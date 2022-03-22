import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  popupShow = false;
  popupShowBg:any;
  @Output() sendNotification =  new EventEmitter();

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
    this.apiService.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value).then(test => {
      if (this.apiService.isLoggedIn()) {
        this.popupShow = true;
        this.popupShowBg = "success";
        this.message = 'Login successfull';
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 5000);
      } else {
        this.loading = false;
        this.popupShow = true;
        this.popupShowBg = "error";
        this.message = 'Username or password is incorrect.';
      }
      const notificationVal = {
        popupShow: this.popupShow,
        popupShowBg: this.popupShowBg,
        message: this.message
      }
      this.sendNotification.emit(notificationVal)
    })
  }

}
