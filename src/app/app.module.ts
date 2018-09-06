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
import {AuthorizationService} from './authorization.service';
import { SignupComponent } from './signup/signup.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {AuthGuardService} from './auth-guard.service';
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    Test2Component,
    DashboardComponent,
    RegisterComponent,
    FormexampleComponent,
    SignupComponent,
    ConfirmationComponent,
    SigninComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [AuthorizationService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
