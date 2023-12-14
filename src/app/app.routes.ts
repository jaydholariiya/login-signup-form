import { Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

export const routes: Routes = [

    {path : '',component : FirstPageComponent},
    {path : 'register-page' , component : RegisterPageComponent}
   


];
