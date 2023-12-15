import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserDataService } from '../services/user-data.service';

import { NgToastModule } from 'ng-angular-popup';
import { NgToastService } from 'ng-angular-popup';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userService.reloadUser();
  }
  gender: any = ['Male', 'Female'];
  dataPush: any = [];
  res: any;
  checkBox: any = ['Electronic', 'Kitchen', 'Furniture', 'Any Other'];
  registerFormFill: any;
  dataImage: any;
  constructor(
    private fb: FormBuilder,
    private userService: UserDataService,
    private toast: NgToastService,
    private _snackBar: MatSnackBar
  ) {
    this.registerFormFill = this.fb.group({
      UserName: ['', Validators.required],
      firstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Age: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Website: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      Gendering: [[], Validators.required],
      CheckboxValues: [[], Validators.required],
      File: [''],
    });
    console.warn(this.registerFormFill.value);
  }
  data(target: any) {
    if (target.checked) {
      this.dataPush.push(target.value);
      console.log(this.dataPush, 'if condition');
    } else {
      this.dataPush = this.dataPush.filter(
        (item: any) => item !== target.value
      );
    }
    console.warn(this.dataPush);
    this.registerFormFill.get('CheckboxValues').setValue(this.dataPush);
  }

  fileUploadChange(target: any) {
    let targetInput = target;
    const FileData =
      targetInput.files && targetInput.files.length > 0
        ? targetInput.files[0]
        : null;

    if (FileData) {
      const reader = new FileReader();

      reader.onloadend = () => {
        this.dataImage = reader.result as string;
        // console.log(dataImage);
      };

      reader.readAsDataURL(FileData);
      console.warn('file upload');

      const fileName = FileData.name;
      console.log('File Name:', fileName);
    }
    console.warn(this.dataImage);

    this.registerFormFill.get('File').setValue(this.dataImage);
  }

  dataSubmit() {
    let res = this.registerFormFill.value;
    res['File'] = this.dataImage;
    console.warn(res, 'res pass');

    this.userService.addUserData(res).subscribe((result) => {
      console.warn(result);
    });

    this.registerFormFill.reset();
  }
}
