import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'demo';
  ngOnInit() {
    ScrollTrigger.create({
      trigger: '.header',
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false
    });
  }
}
