import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesDetailsComponent } from './agencies-details/agencies-details.component';
import { AgenciesListComponent } from './agencies-list/agencies-list.component';
import { AgenciesComponent } from './agencies.component';

const routes: Routes = [
  {
    path: '',
    component: AgenciesComponent,
    children: [
      { path: ':id/details', component: AgenciesDetailsComponent },
      { path:'', component: AgenciesListComponent,  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciesRoutingModule { }
