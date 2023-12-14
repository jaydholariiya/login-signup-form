import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css',
})
export class FirstPageComponent {}
