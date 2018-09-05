import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test2Component } from './test2/test2.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { FormexampleComponent } from './formexample/formexample.component';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './auth-guard.service';

const routes: Routes =[
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'test2',component:Test2Component},
  {path:'register',component:RegisterComponent},
  {path:'formexample',component:FormexampleComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'header',component:HeaderComponent},
  {path:'home',component:HomeComponent}
  

  
];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

  constructor() {
    console.log("from cons");
  }



 }
