import { Component,  AfterViewInit, } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent implements AfterViewInit{
  
  constructor() {}

  initScrollTrigger() {
    

    gsap.to('.heading-main', {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: 'section.one',
        scrub: true,
        start: '3% 100%',
        end: '15% 10%',
      },
    });

    gsap.to('figure.preview', {
      scrollTrigger: {
        toggleClass: 'active',
        trigger: 'figure.preview',
        start: '50% 80%',
        end: '85% 20%',
      },
    });
  }

  ngAfterViewInit() {
    this.initScrollTrigger();
  }
  
  }

