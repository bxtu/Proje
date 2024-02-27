import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjeComponent } from './proje/proje.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ProjeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }

// key ve yazılacak halini excelde yaz örneğin keyNumber diye class oluştururkenki mantıkla yazmış ol.
// en.json ve de.json şeklinde oluyor örnek olarak key mesela systemTestCase: "Sistem Testi" gibi