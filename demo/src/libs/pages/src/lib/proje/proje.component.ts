import { Component } from '@angular/core';

@Component({
  selector: 'app-proje',
  templateUrl: './proje.component.html',
  styleUrls: ['./proje.component.scss']
})
export class ProjeComponent {
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
