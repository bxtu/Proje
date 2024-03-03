import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
  ellipses: any[] = [];
  isSectionVisible: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Simülasyon için 4 elips ekleniyor
    for (let i = 0; i < 4; i++) {
      const ellipse = this.renderer.createElement('div');
      this.renderer.addClass(ellipse, 'ellipse');
      this.renderer.setStyle(ellipse, 'background-color', 'rgba(0, 0, 0, 0.5)');
      this.renderer.setStyle(ellipse, 'opacity', `${0.5 - i * 0.1}`);
      this.ellipses.push(ellipse);
      this.renderer.appendChild(this.el.nativeElement, ellipse);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    const sectionPosition = this.el.nativeElement.querySelector('.section').getBoundingClientRect().top;

    if (sectionPosition < window.innerHeight && !this.isSectionVisible) {
      this.isSectionVisible = true;

      // Hakkımızda bölümünü görünür hale getirin veya animasyon uygulayın
      this.renderer.setStyle(this.el.nativeElement.querySelector('.section'), 'transform', 'translateY(0)');
    }

    const scaleFactor = 1 + scrollPosition / 500; // Ayarlayabilirsiniz

    this.ellipses.forEach((ellipse, index) => {
      const size = 50 * scaleFactor; // Ayarlayabilirsiniz
      this.renderer.setStyle(ellipse, 'width', `${size}px`);
      this.renderer.setStyle(ellipse, 'height', `${size}px`);
      const offset = (index + 1) * 100; // Ayarlayabilirsiniz
      this.renderer.setStyle(ellipse, 'top', `${offset}px`);
      this.renderer.setStyle(ellipse, 'left', `${offset}px`);
    });
  }
}
