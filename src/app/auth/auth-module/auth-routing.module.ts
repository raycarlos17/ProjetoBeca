import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from 'src/app/user/register-user/register-user.component';
import { LoginUserComponent } from 'src/app/user/login-user/login-user.component';

const routes: Routes = [
  { path: 'auth/register', component: RegisterUserComponent },
  {path:'auth/login', component:LoginUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
