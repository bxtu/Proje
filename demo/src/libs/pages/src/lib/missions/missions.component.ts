import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.scss'
})
export class MissionsComponent {
  projects = [
    { id: 1, title: 'BİTİRİM', description: 'Proje 1 Açıklaması' , background: 'assets/background1.jpg'},
    { id: 2, title: 'CAELIFERA', description: 'Proje 2 Açıklaması' , background: 'assets/background1.jpg'},
    { id: 3, title: 'OPERANTE', description: 'Proje 3 Açıklaması' , background: 'assets/background1.jpg'},
    { id: 4, title: 'PAS', description: 'Proje 4 Açıklaması' , background: 'assets/background1.jpg'},
    { id: 5, title: 'PRANGA', description: 'Proje 5 Açıklaması' , background: 'assets/background1.jpg'},
    { id: 6, title: 'PULSAR', description: 'Proje 5 Açıklaması' , background: 'assets/background1.jpg'},
    { id: 7, title: 'QUASAR', description: 'Proje 5 Açıklaması' , background: 'assets/background1.jpg'},
    { id: 8, title: 'TOYGAR', description: 'Proje 5 Açıklaması' , background: 'assets/background1.jpg'},
  ];

  goToProject(id: number) {
    console.log('Go to project with id:', id);
    const element = document.getElementById('project-' + id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}