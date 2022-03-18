import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobDetails:any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getJobsDetails().subscribe(jobs => {
      jobs.map(job => {
        job.languages = JSON.parse(job.languages);
        this.jobDetails.push(job);
      })
    })
  }

}
