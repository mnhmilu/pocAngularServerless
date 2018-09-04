import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { Test2Component } from './test2/test2.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { FormexampleComponent } from './formexample/formexample.component';
import {AuthorizationService} from './authorization.service'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    Test2Component,
    DashboardComponent,
    RegisterComponent,
    FormexampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
