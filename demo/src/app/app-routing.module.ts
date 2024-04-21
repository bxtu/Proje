import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'src/libs/pages/src/lib/main-page/main-page.component';
import { ProjeComponent } from 'src/libs/pages/src/lib/proje/proje.component';
import { AboutusComponent } from 'src/libs/pages/src/lib/aboutus/aboutus.component';
import { MisyonlarComponent } from 'src/libs/pages/src/lib/misyonlar/misyonlar.component';
import { PaydaslarComponent } from 'src/libs/pages/src/lib/paydaslar/paydaslar.component';
import { PlatformPageComponent } from 'src/libs/pages/src/lib/platform-page/platform-page.component';
const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'proje', component: ProjeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'misyonlar', component: MisyonlarComponent },
  { path: 'paydaslar', component: PaydaslarComponent },
  { path: 'platform', component: PlatformPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
