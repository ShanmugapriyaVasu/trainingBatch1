import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginSection } from './auth/login/login.component';

export const appRoute: Routes = [
  { path: 'login', component: LoginSection },
  { path: '', redirectTo: 'login', pathMatch: "full" }
]