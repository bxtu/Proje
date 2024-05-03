import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TweenMax, Elastic } from 'gsap'; // GSAP TweenMax kütüphanesi
@Component({
  selector: 'app-misyonlar',
  templateUrl: './misyonlar.component.html',
  styleUrl: './misyonlar.component.scss'
})
export class MisyonlarComponent  {
  router: any;
  text: string = "Your text goes here."; // Animasyon yapılacak metin
  

  constructor(@Inject(DOCUMENT) private document: Document, private elementRef: ElementRef) { }

  goToProje() {
    this.router.navigate(['/proje']);
  }
  ngAfterViewInit(): void {
    this.initialAnimations();
  }


  initialAnimations(): void {
    
    const listWrapperEl = document.querySelector('.outer');
const listEl = document.querySelector('.slider');
const cards = document.querySelectorAll('.inner');

if (listWrapperEl && listEl && cards.length > 0) {
  gsap.to(listEl, {
    x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: '.outer',
      start: 'top top',
      end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
      scrub: true,

      pin: true,
      invalidateOnRefresh: true,
      
    },
  });

  
} else {
  console.error('List wrapper or list element not found.');
}

    
}

}