import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CurrencyInrPipe } from './pipes/currency-inr.pipe';
import { ReplacePipe } from './pipes/replace.pipe';
import { SearchpipePipe } from './pipes/searchpipe.pipe';
import { MatTableFilterComponent } from './components/mat-table-filter/mat-table-filter.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserTableComponent } from './components/user-table/user-table.component';
import { MatTableJobsComponent } from './components/mat-table-jobs/mat-table-jobs.component';
import { MatTableQuotesComponent } from './components/mat-table-quotes/mat-table-quotes.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    CurrencyInrPipe,
    SearchpipePipe,
    ReplacePipe,
    MatTableFilterComponent,
    LoginFormComponent,
    UserTableComponent,
    MatTableJobsComponent,
    MatTableQuotesComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    CurrencyInrPipe,
    SearchpipePipe,
    ReplacePipe,
    MatTableFilterComponent,
    LoginFormComponent,
    UserTableComponent,
    MatTableJobsComponent,
    MatTableQuotesComponent,
    NotificationComponent
  ]
})
export class SharedModule { }
