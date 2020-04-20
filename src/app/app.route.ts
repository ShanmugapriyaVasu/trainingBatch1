import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginSection } from './auth/login/login.component';
import { SignupSection } from './auth/signup/signup.component';
import { DashboardSection } from './dashboard/dashboard.component';

export const appRoute: Routes = [
  { path: 'dashboard',component: DashboardSection },
  { path: 'signup', component: SignupSection },
  { path: 'login', component: LoginSection },
  { path: '', redirectTo: 'login', pathMatch: "full" },
]