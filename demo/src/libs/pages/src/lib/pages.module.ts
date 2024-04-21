import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlatformPageComponent } from './platform-page/platform-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PlatformPageComponent
  ],


  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class PagesModule { }

// key ve yazılacak halini excelde yaz örneğin keyNumber diye class oluştururkenki mantıkla yazmış ol.
// en.json ve de.json şeklinde oluyor örnek olarak key mesela systemTestCase: "Sistem Testi" gibi