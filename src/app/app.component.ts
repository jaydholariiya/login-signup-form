import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, RouterModule, FirstPageComponent],
})
export class AppComponent {
  constructor(private user: UserDataService) {}
  title = 'register-from';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  
  }
}
