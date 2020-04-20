import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { appRoute } from './app.route';

import { AppComponent } from './app.component';
import { LoginSection } from './auth/login/login.component';
import { DashboardSection } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot (appRoute)
  ],
  declarations: [
    AppComponent,
    LoginSection,
    DashboardSection
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
