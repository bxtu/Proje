import { DOCUMENT } from '@angular/common';
import { Component, HostListener, ElementRef, Renderer2, AfterViewInit, Inject } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent implements AfterViewInit{
  
  constructor(@Inject(DOCUMENT) private document: Document) { }


  ngAfterViewInit(): void {
    this.initialAnimations();
  }
  initialAnimations(): void {
    gsap.from(this.document.querySelector('.heading-main'), {
      duration: 2,
      x: '-50%', // Sayfanın yatay ortasına göre konumlandır
      opacity: 0, // Başlangıçta görünmez
    });
  }
  
  }

