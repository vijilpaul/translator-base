import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobsComponent } from './jobs.component';
import { MyQuotedJobsComponent } from './my-quoted-jobs/my-quoted-jobs.component';
import { MyjobsComponent } from './myjobs/myjobs.component';
import { PostJobComponent } from './post-job/post-job.component';

const routes: Routes = [
  {
    path: '',
    component: JobsComponent,
    children: [
      { path:'', component: JobListComponent},
      { path: ':id/details', component: JobDetailsComponent },
      { path:':id/job-edit', component: JobEditComponent},
      { path:'my-quoted-jobs', component: MyQuotedJobsComponent},
      { path:'post-job', component: PostJobComponent},
      { path:'myjobs', component: MyjobsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
