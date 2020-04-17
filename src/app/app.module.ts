import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { appRoute } from './app.route';

import { AppComponent } from './app.component';
import { LoginSection } from './auth/login/login.component';
import { Dashboard } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot (appRoute)
  ],
  declarations: [
    AppComponent,
    LoginSection,
    Dashboard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
