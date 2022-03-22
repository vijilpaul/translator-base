import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, 
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'profile/:username/edit', component: ProfileEditComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
