import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { SkeletonModule } from 'primeng/skeleton';
import { EditorModule } from 'primeng/editor';
// import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-data',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    PasswordModule,
    SkeletonModule,
    TableModule,
    InputTextModule,
    BadgeModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './get-data.component.html',
  styleUrl: './get-data.component.css',
})
export class GetDataComponent {
  loading: boolean = true;
  users: any;
  lengthCount: any;
  userData: any;
  filterText: any = '';
  constructor(private http: HttpClient, private user: UserDataService) {
    setTimeout(() => {
      this.user.GetUserData().subscribe((result) => {
        this.userData = result;
        this.loading = false;
      });
    }, 500);
  }

  get filteredData(): any[] {
    return this.userData.filter(
      (item: { [s: string]: unknown } | ArrayLike<unknown>) =>
        Object.values(item).some((val) =>
          val?.toString().toLowerCase().includes(this.filterText.toLowerCase())
        )
    );
  }
  updateData(id: number) {}
  deleteData(id: any) {
    this.user.deleteData(id).subscribe((result) => {
      console.warn('deleted Successfully');

      this.user.GetUserData().subscribe((result) => {
        this.userData = result;
        this.loading = false;
      });
    });
  }
}
