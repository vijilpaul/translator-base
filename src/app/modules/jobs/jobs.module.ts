import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainModule } from 'src/app/main/main.module';
import { JobEditComponent } from './job-edit/job-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { MyQuotedJobsComponent } from './my-quoted-jobs/my-quoted-jobs.component';
import { PostJobComponent } from './post-job/post-job.component';
import { PostJobFormComponent } from './post-job/post-job-form/post-job-form.component';
import { MyjobsComponent } from './myjobs/myjobs.component';


@NgModule({
  declarations: [
    JobsComponent,
    JobListComponent,
    JobDetailsComponent,
    JobEditComponent,
    MyQuotedJobsComponent,
    PostJobComponent,
    PostJobFormComponent,
    MyjobsComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule,
    MainModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule
  ],
  exports:[MyQuotedJobsComponent]

})
export class JobsModule { }
