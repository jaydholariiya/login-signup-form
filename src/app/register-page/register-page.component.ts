import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  gender: any = ['Male', 'Female'];
  checkBox: any = ['Electronic', 'Kitchen', 'Furniture', 'Any Other'];
  registerFormFill: any;
  constructor(private fb: FormBuilder) {
    this.registerFormFill = this.fb.group({
      firstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Age: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Website: ['', Validators.required],
      Favourite: [[], Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      Gendering: [[], Validators.required],
    });
    console.warn(this.registerFormFill.value);
  }
}
