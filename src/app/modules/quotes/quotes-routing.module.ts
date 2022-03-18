import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyJobQuotesComponent } from './my-job-quotes/my-job-quotes.component';
import { MyQuotesComponent } from './my-quotes/my-quotes.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
import { QuotesComponent } from './quotes.component';
import { SubmitQuoteComponent } from './submit-quote/submit-quote.component';

const routes: Routes = [
  {
    path: '',
    component: QuotesComponent,
    children: [
      { path: ':id/details', component: QuotesDetailsComponent },
      { path: ':id/submit-quote', component: SubmitQuoteComponent },
      { path:'', component: QuotesListComponent},
      { path:'my-quotes', component: MyQuotesComponent},
      { path:'my-job-quotes', component: MyJobQuotesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
