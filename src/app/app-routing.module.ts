import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {EmployeehomeComponent} from './employeehome/employeehome.component';
import {CreateemployeeComponent} from './createemployee/createemployee.component';
import {ReademployeeComponent} from './reademployee/reademployee.component';
import {AuthGuard} from '././guard/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'home' , component: EmployeehomeComponent, canActivate:[AuthGuard] },
  {path: 'create' , component: CreateemployeeComponent, canActivate:[AuthGuard] },
  {path: 'read' , component: ReademployeeComponent, canActivate:[AuthGuard] },
  {path: 'login' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
