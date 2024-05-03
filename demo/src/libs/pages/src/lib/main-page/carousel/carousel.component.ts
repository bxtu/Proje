import { Component, ElementRef, Inject,Renderer2, OnInit, ViewChild, inject} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: string[] = ['assets/background1.jpg', 'assets/background2.jpg', 'assets/background3.jpg'];
  currentIndex: number = 0;
  timer: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}



  ngOnInit() {
    // Sayfa yüklendiğinde otomatik olarak ilk slaytı göstermek için
    this.applyAnimation('next-slide');
    // Otomatik geçişi başlat
    this.startSlideShow();
    
  }
  
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.applyAnimation('next-slide');
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.applyAnimation('prev-slide');
  }

  applyAnimation(className: string) {
    const carousel = this.elementRef.nativeElement.querySelector('.carousel-container');
    this.renderer.addClass(carousel, className);
  
    setTimeout(() => {
      this.renderer.removeClass(carousel, className);
    }, 500); // CSS animasyon süresine göre ayarlayabilirsiniz
  }

  startSlideShow() {
    this.timer = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  stopSlideShow() {
    clearInterval(this.timer);
  }

  onClick(event: MouseEvent) {
    const width = this.elementRef.nativeElement.offsetWidth;
    const x = event.pageX - this.elementRef.nativeElement.offsetLeft;
    if (x < width / 2) {
      this.prevSlide();
    } else {
      this.nextSlide();
    }
  }
}
