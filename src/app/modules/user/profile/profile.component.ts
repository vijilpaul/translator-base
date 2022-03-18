import { Component, OnInit } from '@angular/core';
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
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.profileUser();
    this.username = this.profileDetails[0].username;
    this.password = this.profileDetails[0].password;
  }
  editUser() {
    this.saveform = true;
  }
  
  profileUser(){
    this.profileDetails = [];
    this.apiService.getAuthentication().map((user: { languages: string; }) => {
      user.languages = JSON.parse(user.languages)
      this.profileDetails.push(user);
    })
  }
  saveForm(val:any){
    localStorage.removeItem('currentUser');
    this.apiService.login(this.username, this.password);
    setTimeout(() => {
      this.profileUser();
    }, 200);
    this.saveform = val;
  }

}
