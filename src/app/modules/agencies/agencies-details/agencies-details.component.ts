import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-agencies-details',
  templateUrl: './agencies-details.component.html',
  styleUrls: ['./agencies-details.component.scss']
})
export class AgenciesDetailsComponent implements OnInit {

  agencyDetails:any = [];
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const agencyID = params['id'];
      this.apiService.getUserDetails().subscribe(users => users.filter(user => user.id == agencyID).map((user: { languages: string; }) => {
        user.languages = JSON.parse(user.languages)
        this.agencyDetails.push(user);
      }));
    });
  }

}
