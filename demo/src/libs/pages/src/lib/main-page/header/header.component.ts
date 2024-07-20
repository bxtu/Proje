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

  showSubMenu() {
    this.isSubMenuVisible = true;
  }

  hideSubMenu() {
    this.isSubMenuVisible = false;
  }

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');

    if (mobileMenu && hamburger && !mobileMenu.contains(event.target as Node) && !hamburger.contains(event.target as Node)) {
      this.isMobileMenuOpen = false;
    }
  }

  @ViewChild('menu', { static: true })
  menu!: ElementRef<HTMLDivElement>;  

  @ViewChild('header', { static: true })
  header!: ElementRef<HTMLDivElement>;  
  constructor( private el: ElementRef) { }

  scrollToSection(sectionId: string) {
    const element = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }



  lastScrollTop = 0; // Son scroll pozisyonunu tutacak değişken

  ngAfterViewInit(): void {
    this.initialAnimations();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Scroll yönü ve header'ın görünürlüğüne göre işlem yap
    if (currentScrollTop > this.lastScrollTop) {
      // Aşağı doğru scroll yapılıyorsa, header'ı gizle
      this.hideHeader();
    } else {
      // Yukarı doğru scroll yapılıyorsa veya sayfa en üstteyse, header'ı göster
      this.showHeader();
    }

    // Son scroll pozisyonunu güncelle
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
