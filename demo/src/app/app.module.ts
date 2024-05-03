import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CarouselComponent } from 'src/libs/pages/src/lib/main-page/carousel/carousel.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/libs/pages/src/lib/main-page/header/header.component';
import { MainPageComponent } from 'src/libs/pages/src/lib/main-page/main-page.component';
import { ContentComponent } from 'src/libs/pages/src/lib/main-page/content/content.component';
import { MisyonlarComponent } from 'src/libs/pages/src/lib/misyonlar/misyonlar.component';
import { AboutusComponent } from 'src/libs/pages/src/lib/main-page/aboutus/aboutus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from 'src/libs/pages/src/public-api';
import { PlatformComponent } from 'src/libs/pages/src/lib/main-page/platform/platform.component';
import { PaydaslarComponent } from 'src/libs/pages/src/lib/paydaslar/paydaslar.component';
@NgModule({
  
    declarations: [
    MisyonlarComponent,
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    ContentComponent,
    AboutusComponent,
    CarouselComponent,
    PlatformComponent,
    PaydaslarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
