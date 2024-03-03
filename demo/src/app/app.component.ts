import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
}
