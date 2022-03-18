import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss']
})
export class DashboardProfileComponent implements OnInit {

  profileDetails:any = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAuthentication().map((user: { languages: string; }) => {
      user.languages = JSON.parse(user.languages)
      this.profileDetails.push(user);
    })
  }

}
