// header.component.ts
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit{
  
  isSubMenuVisible = false;
  isMobileMenuOpen = false;
  lastScrollTop = 0;

  @ViewChild('menu', { static: true }) menu!: ElementRef<HTMLDivElement>;
  @ViewChild('header', { static: true }) header!: ElementRef<HTMLDivElement>;

  constructor(private el: ElementRef) {}

  showSubMenu() {
    this.isSubMenuVisible = true;
  }

  hideSubMenu() {
    this.isSubMenuVisible = false;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;

    if (this.isMobileMenuOpen) {
      gsap.to(mobileMenu, {
        width: '30%',
        duration: 0.3,
        ease: 'power2.inOut'
      });
    } else {
      gsap.to(mobileMenu, {
        width: '0',
        duration: 0.3,
        ease: 'power2.inOut'
      });
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');

    if (mobileMenu && hamburger && !mobileMenu.contains(event.target as Node) && !hamburger.contains(event.target as Node)) {
      this.isMobileMenuOpen = false;
      gsap.to(mobileMenu, {
        width: '0',
        duration: 0.3,
        ease: 'power2.inOut'
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > this.lastScrollTop) {
      this.hideHeader();
    } else {
      this.showHeader();
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }

  private hideHeader() {
    const headerElement = document.querySelector('header');
    gsap.to(headerElement, {
      opacity: 0,
      duration: 0.5
    });
  }

  private showHeader() {
    const headerElement = document.querySelector('header');
    gsap.to(headerElement, {
      opacity: 1,
      duration: 0.4
    });
  }

  ngAfterViewInit(): void {
    this.initialAnimations();
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
  }
}
