import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-my-job-quotes',
  templateUrl: './my-job-quotes.component.html',
  styleUrls: ['./my-job-quotes.component.scss']
})
export class MyJobQuotesComponent implements OnInit {

  @Input() count: any = 100;
  userId: any;
  jobDetails:any;
  quoteDetails:any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.userId = this.apiService.getAuthentication()[0].id;
    this.apiService.getJobsDetails().pipe(
      map(jobs => jobs.filter((job) => job.userid === this.userId))
    ).subscribe(data => this.jobDetails = data);

    this.apiService.getQuoteDetails().subscribe(quotes => this.quoteDetails = quotes);
  }

}
