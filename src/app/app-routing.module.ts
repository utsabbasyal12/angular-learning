import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EInfoComponent } from './e-info/e-info.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { WholesalerInfoComponent } from './wholesaler-info/wholesaler-info.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'user', component: EInfoComponent},
  {path: 'forgetPassword', component: ForgetPasswordComponent},
  {path: 'wholesalerInfo', component: WholesalerInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
