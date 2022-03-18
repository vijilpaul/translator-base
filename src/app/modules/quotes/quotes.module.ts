import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesComponent } from './quotes.component';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { MainModule } from 'src/app/main/main.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyQuotesComponent } from './my-quotes/my-quotes.component';
import { MyJobQuotesComponent } from './my-job-quotes/my-job-quotes.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SubmitQuoteComponent } from './submit-quote/submit-quote.component';


@NgModule({
  declarations: [
    QuotesComponent,
    QuotesListComponent,
    QuotesDetailsComponent,
    MyQuotesComponent,
    MyJobQuotesComponent,
    SubmitQuoteComponent
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    SharedModule,
    MainModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [
    MyQuotesComponent,
    MyJobQuotesComponent
  ]
})
export class QuotesModule { }
