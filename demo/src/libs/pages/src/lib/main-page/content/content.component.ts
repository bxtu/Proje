import { Component, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  constructor(private elementRef: ElementRef) { }

  animateButton() {
    const buttonElement = this.elementRef.nativeElement.querySelector('.animate-button');

    gsap.from(buttonElement, {
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      ease: 'back'
    });
  }

}
