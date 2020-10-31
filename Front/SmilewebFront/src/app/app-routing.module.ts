import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppoinmentsComponent} from './appoinments/appoinments.component';
import {HomeComponent} from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { UserguardGuard } from './userguard.guard';
import { DocDetailsComponent } from './doc-details/doc-details.component'


const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'appoinments-component', component: AppoinmentsComponent, canActivate : [UserguardGuard]},
  {path : 'auth', component: AuthComponent},
  {path : 'login', component:LoginComponent},
  {path : 'doc-details', component:DocDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
