import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../../core/api.service';
import { MyQuotedJobsComponent } from '../jobs/my-quoted-jobs/my-quoted-jobs.component';
import { MyQuotesComponent } from '../quotes/my-quotes/my-quotes.component';
import { DashboardJobsComponent } from './dashboard-jobs/dashboard-jobs.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userDetails:any[] = [];
  accType:any;
  userId:any;
  disabledViewMyJob:any;
  disabledMyQuotes:any;
  disabledMyQuotedJob:any;


  @ViewChild(DashboardJobsComponent, {static: false}) myjobs: DashboardJobsComponent | undefined;
  @ViewChild(MyQuotesComponent, {static: false}) myQuotes: MyQuotesComponent | undefined;
  @ViewChild(MyQuotedJobsComponent, {static: false}) myQuotedJob: MyQuotedJobsComponent | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.accType = this.apiService.getAuthentication()[0].account_type;
    this.userId = this.apiService.getAuthentication()[0].id;
    const userFilters = this.apiService.getUserDetails().pipe(
      map(pages => pages.filter((page) => page.account_type != this.accType))
    );
    userFilters.subscribe(users => {
      users.map(user => {
        user.languages = JSON.parse(user.languages)
        this.userDetails.push(user);
      });
    });
  }
  ngAfterViewInit(){
    setTimeout(() => {
      this.disabledViewMyJob = this.myjobs?.jobDetails;
      this.disabledMyQuotes = this.myQuotes?.quoteDetails;
      this.disabledMyQuotedJob = this.myQuotedJob?.quoteDetails;
    }, 100);
    
  }
}
