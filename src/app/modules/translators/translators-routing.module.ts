import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TranslatorsComponent } from './translators.component';
import { TranslatorListComponent } from './translator-list/translator-list.component';
import { TranslatorDetailsComponent } from './translator-details/translator-details.component';

const routes: Routes = [
  {
    path: '',
    component: TranslatorsComponent,
    children: [
      { path: ':id/details', component: TranslatorDetailsComponent },
      { path:'', component: TranslatorListComponent,  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranslatorsRoutingModule { }
