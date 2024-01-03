import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-update-data',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './update-data.component.html',
  styleUrl: './update-data.component.css',
})
export class UpdateDataComponent {
  checkBox: any = ['Electronic', 'Kitchen', 'Furniture', 'Any Other'];
  gender: any = ['Male', 'Female'];
  dataImage: any;
  dataPush: any = [];
  constructor(
    private user: UserDataService,
    private routing: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.registerFormFill = this.fb.group({
      UserName: [''],
      firstName: [''],
      LastName: [''],
      Age: [''],
      PhoneNumber: [''],
      Website: [''],
      Email: [''],
      Password: [''],
      Gendering: [[]],
      CheckboxValues: [[]],
      File: [''],
    });
    console.warn('UserName', this.registerFormFill.value);
    this.getData();
  }

  registerFormFill: any;
  DataPerID: any;
  getData() {
    let paramasid = this.routing.snapshot.paramMap.get('id');
    console.warn('data id is :', paramasid);

    this.user.getDataUsingID(paramasid).subscribe((result) => {
      this.DataPerID = result;

      this.registerFormFill.patchValue({
        UserName: this.DataPerID.UserName,
        firstName: this.DataPerID.firstName,
        LastName: this.DataPerID.LastName,
        Age: this.DataPerID.Age,
        PhoneNumber: this.DataPerID.PhoneNumber,
        Email: this.DataPerID.Email,
        Gendering: this.DataPerID.Gendering,
        CheckboxValues: this.DataPerID.CheckboxValues,
        File: this.DataPerID.File,
        Website: this.DataPerID.Website,
        Password: this.DataPerID.Password,
      });
    });
  }
  UpdateData(data: any) {
    if (this.DataPerID) {
      data.id = this.DataPerID.id;
    }

    this.user.updateDataPerID(data).subscribe((result) => {
      console.warn('Updated Data Successfully');
      console.warn(result, 'Updated Result');
    });
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
      };

      reader.readAsDataURL(FileData);
      console.warn('file upload');

      const fileName = FileData.name;
      console.log('File Name:', fileName);
    }
    console.warn(this.dataImage);
    this.registerFormFill.get('File').setValue(this.dataImage);
  }

  data(target: any) {
    if (target.checked) {
      this.dataPush.push(target.value);
    } else {
      this.dataPush = this.dataPush.filter(
        (item: any) => item !== target.value
      );
    }
    console.warn(this.dataPush);
    this.registerFormFill.get('CheckboxValues').setValue(this.dataPush);
  }
}
