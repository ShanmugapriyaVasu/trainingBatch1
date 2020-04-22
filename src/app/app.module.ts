import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterial } from './angular.material';

import { appRoute } from './app.route';

import { AppComponent } from './app.component';
import { LoginSection } from './auth/login/login.component';
import { SignupSection } from './auth/signup/signup.component';
import { DashboardSection } from './dashboard/dashboard.component';

import { AuthService } from './sharedServices/services/auth.service';
import { UserService } from './sharedServices/services/users.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, HttpClientModule, ReactiveFormsModule, BrowserAnimationsModule, AngularMaterial,
    RouterModule.forRoot (appRoute)
  ],
  declarations: [
    AppComponent,
    LoginSection, SignupSection,
    DashboardSection
  ],
  providers: [ AuthService, UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
