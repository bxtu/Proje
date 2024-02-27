import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { Proje1Component } from './proje1/proje1.component';
import { ProjeComponent } from './proje/proje.component';
import { HeaderComponent } from './main-page/header/header.component';
import { ContentComponent } from './main-page/content/content.component';



@NgModule({
  declarations: [
    MainPageComponent,
    Proje1Component,
    ProjeComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
