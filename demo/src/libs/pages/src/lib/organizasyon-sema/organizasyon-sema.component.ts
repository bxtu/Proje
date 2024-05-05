import { Component, ElementRef, ViewChild, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { gsap } from 'gsap';

@Component({
  selector: 'app-organizasyon-sema',
  templateUrl: './organizasyon-sema.component.html',
  styleUrls: ['./organizasyon-sema.component.scss']
})
export class OrganizasyonSemaComponent implements OnInit, OnDestroy{


  chart: any; 


  ngOnInit(): void {
    // Register necessary components for Chart.js (line chart)
    Chart.register(...registerables);

    // Create a chart
    this.chart = new Chart('myChart', {
      type: 'line', // Custom chart type for tree structure
      data: {
        labels: ['YÖNETİM KURULU', 'YÖNETİM KURULU BAŞKANI', 'PROJE KOORDİNATÖRLÜĞÜ', 'BİLİŞİM SİSTEMLERİ BAŞKANLIĞI', 'ÜNİVERSİTE TAKIMLARI', 'AVİYONİK', 'YAZILIM BİRİM LİDERLİĞİ', 'DONANIM BİRİM LİDERLİĞİ', 'TASARIM', 'MEKANİK BİRİM LİDERLİĞİ', 'ANALİZ BİRİM LİDERİ', 'MEDYA DİREKTÖRLÜĞÜ', 'HUKUK BİRİMİ'],
        datasets: [{
          label: 'Hiyerarşi',
          data: [
            { parentId: null, id: 1 }, // YÖNETİM KURULU
            { parentId: 1, id: 2 },    // YÖNETİM KURULU BAŞKANI
            { parentId: 2, id: 3 },    // PROJE KOORDİNATÖRLÜĞÜ
            { parentId: 3, id: 4 },    // BİLİŞİM SİSTEMLERİ BAŞKANLIĞI
            { parentId: 2, id: 5 },    // ÜNİVERSİTE TAKIMLARI
            // ...diğer düğümler buraya eklenebilir
          ],
        }]
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label;
              }
            }
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy(); // Cleanup chart instance on component destruction
    }
  }
  
  @ViewChild('wrap')
  wrap!: ElementRef;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    gsap.set(this.wrap.nativeElement, { perspective: 600 });

    this.el.nativeElement.addEventListener('mousemove', (event: { clientX: any; clientY: any; }) => {
      const { clientX, clientY } = event;
      const rect = this.wrap.nativeElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const xDistance = clientX - centerX;
      const yDistance = clientY - centerY;

      const strength = 0.03; // İttirme kuvveti

      gsap.to(this.wrap.nativeElement, {
        duration: 1,
        rotationY: xDistance * strength,
        rotationX: -yDistance * strength,
        ease: 'power2.out'
      });
    });
  }
}
