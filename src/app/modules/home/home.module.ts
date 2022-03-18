import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeContainerComponent } from './container/home-container/home-container.component';
import { SharedModule } from '../../shared/shared.module';
import { MainModule } from '../../main/main.module';



@NgModule({
  declarations: [HomeComponent, HomeContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainModule
  ]
})
export class HomeModule { }
