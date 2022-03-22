import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileDetails:any = [];
  saveform = false;
  username:any;
  password:any;
  notificationDetails:any;
  
  constructor(private apiService: ApiService, private route: Router) { }
  ngOnInit() {
    this.profileDetails.push(this.apiService.getAuthentication());
    this.username = this.profileDetails[0].username;
  }
  editUser() {
    this.route.navigate(['/user/profile/'+ this.username + '/edit']);
  }

}
