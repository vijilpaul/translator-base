import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-dashboard-jobs',
  templateUrl: './dashboard-jobs.component.html',
  styleUrls: ['./dashboard-jobs.component.scss']
})
export class DashboardJobsComponent implements OnInit {

  @Input() userId: any;
  jobDetails:any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const jobFilter =this.apiService.getJobsDetails().pipe(
      map(pages => pages.filter((page) => page.userid === this.userId))
    );
    jobFilter.subscribe(jobs => {
      jobs.map(job => {
        job.languages = JSON.parse(job.languages);
        this.jobDetails.push(job);
      });
    })
  }
}
