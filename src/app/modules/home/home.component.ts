import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userDetails:any = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.apiService.getUserDetails().subscribe(user => {
    //   this.userDetails = user;
    // })
    this.apiService.getUserDetails().subscribe(users => {
      users.map(user => {
        user.languages = JSON.parse(user.languages)
        this.userDetails.push(user);
      })
    })
    setTimeout(() => {
      console.log('user', this.userDetails)
      
    }, 1000);
  }

}
