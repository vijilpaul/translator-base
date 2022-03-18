import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.scss']
})
export class AgenciesListComponent implements OnInit {

  userDetails:any = [];
  accType:any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    if(this.apiService.getAuthentication()[0]){
      this.accType = this.apiService.getAuthentication()[0].account_type;
    } else {
      this.accType = "translator";
    }
    const userFilters = this.apiService.getUserDetails().pipe(
      map(pages => pages.filter((page) => page.account_type != this.accType))
    );
    userFilters.subscribe(users => {
      users.map(user => {
        user.languages = JSON.parse(user.languages)
        this.userDetails.push(user);
      })
    });
  }

}
