import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  notificationDetails:any;
  popupContainer = false;

  constructor() {
    }

  ngOnInit(): void {
  }

  onNotificationMsg(event: any){
    this.notificationDetails = event;
    this.popupContainer = event.popupShow;
  }
  popupNotification(event: any){
    this.popupContainer = event
  }

}
