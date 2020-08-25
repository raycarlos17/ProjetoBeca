import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../index/index.component'
import { AuthGuardService } from '../auth/guard/auth-guard.service';
import { SugestionComponent } from '../sugestion/sugestion.component';

const routes: Routes = [
  { path: '', component: IndexComponent, canActivate: [AuthGuardService] },
  { path: 'sugestion', component:SugestionComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
