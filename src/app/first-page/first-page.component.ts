import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
// import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [RouterModule, RouterLink, CommonModule],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css',
})
export class FirstPageComponent {
  localStroageData: any = localStorage.getItem('userData');
  constructor(private router: Router) {}
  ngOnInit(): void {}

  removeLocalData() {
    localStorage.removeItem('userData');
  }
}
