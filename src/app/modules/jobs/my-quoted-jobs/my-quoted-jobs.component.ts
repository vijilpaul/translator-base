import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-my-quoted-jobs',
  templateUrl: './my-quoted-jobs.component.html',
  styleUrls: ['./my-quoted-jobs.component.scss']
})
export class MyQuotedJobsComponent implements OnInit {

  @Input() count: any = 100;
  jobDetails:any;
  quoteDetails:any;
  userId:any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.userId = this.apiService.getAuthentication()[0].id;
    this.apiService.getQuoteDetails().pipe(
      map(quotes => quotes.filter((quote) => quote.userID === this.userId))
    ).subscribe(data => this.quoteDetails = data);
    this.apiService.getJobsDetails().subscribe(jobs => this.jobDetails = jobs);
  }

}
