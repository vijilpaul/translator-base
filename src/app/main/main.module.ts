import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
    DashboardHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
    DashboardHeaderComponent
  ]
})
export class MainModule { }
