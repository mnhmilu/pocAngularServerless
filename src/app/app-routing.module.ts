import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test2Component } from './test2/test2.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { FormexampleComponent } from './formexample/formexample.component';

const routes: Routes =[
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'test2',component:Test2Component},
  {path:'register',component:RegisterComponent},
  {path:'formexample',component:FormexampleComponent}
];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

 



 }
