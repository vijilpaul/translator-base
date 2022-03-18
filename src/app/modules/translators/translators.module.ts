import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatorsComponent } from './translators.component';
import { TranslatorsRoutingModule } from './translators-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TranslatorListComponent } from './translator-list/translator-list.component';
import { TranslatorDetailsComponent } from './translator-details/translator-details.component';
import { MainModule } from '../../main/main.module';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [TranslatorsComponent, TranslatorListComponent, TranslatorDetailsComponent],
  imports: [
    CommonModule,
    TranslatorsRoutingModule,
    SharedModule,
    MainModule,
    MatTableModule
  ]
})
export class TranslatorsModule { }
