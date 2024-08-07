import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CarouselComponent } from 'src/libs/pages/src/lib/main-page/carousel/carousel.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/libs/pages/src/lib/main-page/header/header.component';
import { MainPageComponent } from 'src/libs/pages/src/lib/main-page/main-page.component';
import { ContentComponent } from 'src/libs/pages/src/lib/main-page/content/content.component';
import { AboutusComponent } from 'src/libs/pages/src/lib/aboutus/aboutus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from 'src/libs/pages/src/public-api';
import { OrganizasyonAgacComponent } from 'src/libs/pages/src/lib/organizasyon-agac/organizasyon-agac.component';
import { OrganizasyonSemaComponent } from 'src/libs/pages/src/lib/aboutus/organizasyon-sema/organizasyon-sema.component';
import { MissionsComponent } from 'src/libs/pages/src/lib/missions/missions.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FooterComponent } from "../libs/pages/src/lib/main-page/footer/footer.component";
import { IletisimComponent } from 'src/libs/pages/src/lib/iletisim/iletisim.component';
import { PaydaslarComponent } from 'src/libs/pages/src/lib/paydaslar/paydaslar.component';
import { RouterModule } from '@angular/router';
@NgModule({
  
    declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    ContentComponent,
    AboutusComponent,
    CarouselComponent,
    OrganizasyonSemaComponent,
    OrganizasyonAgacComponent,
    MissionsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    RouterModule
],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
