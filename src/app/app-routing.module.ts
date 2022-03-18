import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'translators', loadChildren: () => import('./modules/translators/translators.module').then(m => m.TranslatorsModule)},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'agencies', loadChildren: () => import('./modules/agencies/agencies.module').then(m => m.AgenciesModule) },
  { path: 'jobs', loadChildren: () => import('./modules/jobs/jobs.module').then(m => m.JobsModule) },
  { path: 'quotes', loadChildren: () => import('./modules/quotes/quotes.module').then(m => m.QuotesModule) },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: '**', redirectTo: '/home' }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
