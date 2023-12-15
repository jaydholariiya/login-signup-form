import { CanActivateFn } from '@angular/router';
// import { LoginPageComponent } from '../app/login-page/login-page.component';
import { UserDataService } from '../app/services/user-data.service';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
  let userData = inject(UserDataService);
  let Value = userData.authValue;
  if (localStorage.getItem('userData')) {
    return true;
  }
  return userData.authValue;
};
