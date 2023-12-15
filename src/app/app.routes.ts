import { Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EcommPageComponent } from './ecomm-page/ecomm-page.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  {
    path: 'home-page',
    component: EcommPageComponent,
    canActivate: [authGuard],
  },
];
