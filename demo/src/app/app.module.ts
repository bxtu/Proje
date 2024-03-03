import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/libs/pages/src/lib/main-page/header/header.component';
import { MainPageComponent } from 'src/libs/pages/src/lib/main-page/main-page.component';
import { ContentComponent } from 'src/libs/pages/src/lib/main-page/content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjeComponent } from 'src/libs/pages/src/lib/proje/proje.component';
import { AboutusComponent } from 'src/libs/pages/src/lib/aboutus/aboutus.component';
@NgModule({
  
    declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    ContentComponent,
    ProjeComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
