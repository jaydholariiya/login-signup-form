import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Route, Router, RouterLink, RouterModule } from '@angular/router';
import { UserDataService } from '../services/user-data.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.user.reloadUser();
  }
  authValue = new BehaviorSubject<boolean>(false);
  loginData: FormGroup;
  msg: any;
  constructor(
    private user: UserDataService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginData = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  // loginDataFunc() {
  //   this.user.GetUserData().subscribe((result: any) => {
  //     let dataFind = result.find(
  //       (data: any) =>
  //         data.Email === this.loginData.value.Email &&
  //         this.loginData.value.Password === data.Password
  //     );
  //     if (dataFind) {
  //       this.authValue.next(true);
  //       this.router.navigate(['home-page']);
  //     } else {
  //       setTimeout(() => {
  //         this.msg = 'Password Or Email Is Incorrect Please TryAgain!!';
  //       });
  //     }
  //     setTimeout(() => {
  //       this.msg = '';
  //     }, 1000);
  //   });
  // }

  loginDataFunc() {
    if (this.loginData.valid) {
      this.user.loginUser(this.loginData.value);
    } else {
      console.warn('Form is invalid');
    }
  }
}
