import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-translator-list',
  templateUrl: './translator-list.component.html',
  styleUrls: ['./translator-list.component.scss']
})
export class TranslatorListComponent implements OnInit {

  userDetails:any = [];
  accType:any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    if(this.apiService.getAuthentication()[0]){
      this.accType = this.apiService.getAuthentication()[0].account_type;
    } else {
      this.accType = "agency";
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
