import { Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EcommPageComponent } from './ecomm-page/ecomm-page.component';
import { authGuard } from './auth.guard';
import { GetDataComponent } from './get-data/get-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';

export const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'get-data', component: GetDataComponent },
  { path: 'update-data/:id', component: UpdateDataComponent },
  {
    path: 'home-page',
    component: EcommPageComponent,
    canActivate: [authGuard],
  },
];
