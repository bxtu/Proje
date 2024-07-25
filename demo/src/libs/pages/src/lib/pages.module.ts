import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlatformPageComponent } from './platform-page/platform-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './main-page/footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    PlatformPageComponent,
  ],


  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PagesModule { }

// key ve yazılacak halini excelde yaz örneğin keyNumber diye class oluştururkenki mantıkla yazmış ol.
// en.json ve de.json şeklinde oluyor örnek olarak key mesela systemTestCase: "Sistem Testi" gibi