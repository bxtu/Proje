import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.scss'
})
export class MissionsComponent {
  projects = [
    { id: 1, title: 'Proje 1', description: 'Proje 1 Açıklaması' },
    { id: 2, title: 'Proje 2', description: 'Proje 2 Açıklaması' },
    { id: 3, title: 'Proje 3', description: 'Proje 3 Açıklaması' },
    { id: 4, title: 'Proje 4', description: 'Proje 4 Açıklaması' },
    { id: 5, title: 'Proje 5', description: 'Proje 5 Açıklaması' }
  ];

  goToProject(id: number) {
    console.log('Go to project with id:', id);
    const element = document.getElementById('project-' + id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}