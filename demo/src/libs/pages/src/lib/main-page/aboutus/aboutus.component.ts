import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
  
  private animationStopped: boolean = false;

  stopAnimation() {
    this.animationStopped = true;
  }

  startAnimation() {
    this.animationStopped = false;
    this.animateLogo();
  }

  private animateLogo() {
    if (!this.animationStopped) {
      // Your animation logic here
      requestAnimationFrame(() => this.animateLogo());
    }
  }
  }

