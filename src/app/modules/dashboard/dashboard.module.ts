import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardJobsComponent } from './dashboard-jobs/dashboard-jobs.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardComponent } from './dashboard.component';
import { MainModule } from 'src/app/main/main.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuotesModule } from '../quotes/quotes.module';
import { JobsModule } from '../jobs/jobs.module';



@NgModule({
  declarations: [
    DashboardProfileComponent,
    DashboardJobsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MainModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    QuotesModule,
    JobsModule
  ]
})
export class DashboardModule { }
