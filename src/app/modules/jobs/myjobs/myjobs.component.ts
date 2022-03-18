import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.component.html',
  styleUrls: ['./myjobs.component.scss']
})
export class MyjobsComponent implements OnInit {

  jobDetails:any[] = [];
  userId:any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.userId = this.apiService.getAuthentication()[0].id;
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
