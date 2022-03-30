import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})
export class PostJobComponent implements OnInit {

  isNotLoggedIn:any;
  isNotAgency:any;
  isAgency:any;
  userId:any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  
    this.isNotLoggedIn = this.apiService.isLoggedIn();
    const currentUser = this.apiService.getAuthentication();
    console.log(currentUser)
    if(currentUser){
      if(currentUser.account_type != 'Freelance translator and/or interpreter'){
        this.isAgency = true;
        this.userId = currentUser.username;
      } else {
        this.isNotAgency = true;
      }
    }

  }
}
