import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger); // ScrollTrigger eklentisini kaydedin

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements AfterViewInit {
  @ViewChild('secondSection', { static: true })
  secondSection!: ElementRef<HTMLDivElement>; 
  @ViewChild('menu', { static: true })
  menu!: ElementRef<HTMLDivElement>;  
  @ViewChild('menuSecond' , {static:true}) menuSecond: ElementRef<HTMLDivElement> | undefined;  
  @ViewChild('imageFirst', { static: true })
  imageFirst!: ElementRef<HTMLDivElement>; 
  @ViewChild('imageSecond' , {static:true}) imageSecond: ElementRef<HTMLDivElement> | undefined;  

  @ViewChild('thirdSection', { static: true })
  thirdSection!: ElementRef<HTMLDivElement>; 

  
  
  constructor(@Inject(DOCUMENT) private document: Document, private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.initialAnimations();
    this.initScrollAnimations();
  }

  scrollToSection(sectionId: string) {
    const element = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  initialAnimations(): void {

    gsap.from(this.menu.nativeElement.childNodes, {
      duration: 1,
      y: -20,
      opacity: 0,
      stagger: 0.2,
      delay: 0.5,
      ease: 'power2.inOut'
    });
    
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


    
    gsap.from(this.document.querySelector('.heading-main'), {
      duration: 2,
      x: '-50%', // Sayfanın yatay ortasına göre konumlandır
      opacity: 0, // Başlangıçta görünmez
    });
  }

  initScrollAnimations(): void {
    gsap.to('.heading-container', {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.second-section',
        scrub: true,
        start: '70% 60%',
        end: '85% 30%',
      },
    });

    gsap.to('.heading-l', {
      color: '#f00',
      duration: 1.5,
      scrollTrigger: {
        trigger: '.heading-l',
        scrub: true,
        start: '150% center',
      },
    });

    gsap.to('.paragraph', {
      color: '#000',
      duration: 1.5,
      scrollTrigger: {
        trigger: '.paragraph',
        scrub: true,
        start: '150% center',
      },
    });

    gsap.to('.btn', {
      color: '#f00',
      duration: 1.5,
      scrollTrigger: {
        trigger: '.btn',
        scrub: true,
        start: '150% center',
      },
    });

    const scrollTriggerOptions: gsap.plugins.ScrollTriggerInstanceVars = {
      scrub: true,
      toggleClass: 'active',
      start: 'top center',
    };

    gsap.from('#buy', {
      duration: 1.2,
      y: 10,
      opacity: 0,
      scrollTrigger: {
        trigger: '#buy',
        ...scrollTriggerOptions
      }
    });

    gsap.from('#about', {
      duration: 1.2,
      y: 10,
      opacity: 0,
      scrollTrigger: {
        trigger: '#about',
        ...scrollTriggerOptions
      }
    });

    gsap.from('.box', {
      duration: 1.2,
      width: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: '.box',
        ...scrollTriggerOptions,
        start: '-10% center',
      }
    });

    gsap.from('.info-1__visual img', {
      duration: 1.5,
      height: 0,
      scale: '1.3',
      opacity: 0,
      scrollTrigger: {
        trigger: '.info-1__visual img',
        ...scrollTriggerOptions,
        start: '-60% bottom',
      }
    });

    gsap.from('.quote', {
      duration: 1.2,
      opacity: 0,
      scrollTrigger: {
        trigger: '.quote',
        ...scrollTriggerOptions,
        start: '-60% bottom',
      }
    });

    gsap.from('.info-1__visual .heading-3', {
      duration: 1.2,
      y: 40,
      opacity: 0,
      scrollTrigger: {
        trigger: '.info-1__visual .heading-3',
        ...scrollTriggerOptions,
        start: '-60% bottom',
      }
    });

    gsap.from('.info-1__text .paragraph', {
      duration: 1.5,
      y: 40,
      opacity: 0,
      scrollTrigger: {
        trigger: '.info-1__text .paragraph',
        ...scrollTriggerOptions,
        start: '-60% bottom',
      }
    });

    gsap.from('.info-1__text .btn--learn', {
      duration: 1.5,
      y: 40,
      opacity: 0,
      scrollTrigger: {
        trigger: '.info-1__text .btn--learn',
        ...scrollTriggerOptions,
        start: '-60% bottom',
      }
    });

   
  }
}
