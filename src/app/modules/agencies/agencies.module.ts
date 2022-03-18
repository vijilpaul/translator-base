import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesComponent } from './agencies.component';
import { SharedModule } from '../../shared/shared.module';
import { AgenciesListComponent } from './agencies-list/agencies-list.component';
import { AgenciesDetailsComponent } from './agencies-details/agencies-details.component';
import { MainModule } from '../../main/main.module';


@NgModule({
  declarations: [
    AgenciesComponent,
    AgenciesListComponent,
    AgenciesDetailsComponent
  ],
  imports: [
    CommonModule,
    AgenciesRoutingModule,
    SharedModule,
    MainModule
  ]
})
export class AgenciesModule { }
