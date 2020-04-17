import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginSection } from './auth/login/login.component';
import { Dashboard } from './auth/dashboard/dashboard.component';

export const appRoute: Routes = [
  { path: 'login', component: LoginSection },
  { path: '', redirectTo: 'login', pathMatch: "full" },
  { path: 'dashboard', redirectTo: 'dashboard',component: Dashboard }
]