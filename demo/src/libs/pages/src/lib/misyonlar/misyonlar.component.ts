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
export class MisyonlarComponent  implements AfterViewInit{
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
    
    const listWrapperEl = this.document.querySelector('.side-scroll-list-wrapper');
    const listEl = this.document.querySelector('.side-scroll-list');
    const cards = document.querySelectorAll('.side-scroll-item');

    if (listWrapperEl && listEl && cards.length > 0) {
      gsap.to(listEl, {
        x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
        
        ease: 'none',
        scrollTrigger: {
          trigger: '.side-scroll',
          start: 'top top',
          end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: updateOpacity, // Call updateOpacity function on scroll update
          invalidateOnRefresh: true,
        },
      });
    } else {
      console.error('List wrapper or list element not found.');
    }

    function updateOpacity() {
      const viewportCenter = window.innerWidth / 2; // Calculate viewport center
      cards.forEach(card => {
        const cardRect = (card as HTMLElement).getBoundingClientRect(); // Cast card as HTMLElement
        const distanceToCenter = Math.abs(viewportCenter - (cardRect.left + cardRect.width / 2)); // Calculate distance to center
        const maxDistance = window.innerWidth / 2; // Max distance is half of viewport width
        const opacity = 1 - (distanceToCenter / maxDistance); // Calculate opacity based on distance to center
        (card as HTMLElement).style.opacity = String(opacity); // Set opacity of the card
      });
    }
    
}

}