import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.scss'
})
export class PlatformComponent implements AfterViewInit{

  @ViewChild('imageFirst', { static: true })
  imageFirst!: ElementRef<HTMLDivElement>; 
  
  @ViewChild('imageSecond' , {static:true}) imageSecond: ElementRef<HTMLDivElement> | undefined;

  constructor(@Inject(DOCUMENT) private document: Document){ }
  

  ngAfterViewInit(): void {
  }

}
