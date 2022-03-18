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
    if(currentUser[0]){
      if(currentUser[0].account_type == 'agency'){
        this.isAgency = true;
        this.userId = currentUser[0].id;
      } else {
        this.isNotAgency = true;
      }
    }

  }
}
