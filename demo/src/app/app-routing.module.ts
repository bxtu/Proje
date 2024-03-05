import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'src/libs/pages/src/lib/main-page/main-page.component';
import { ProjeComponent } from 'src/libs/pages/src/lib/proje/proje.component';
import { AboutusComponent } from 'src/libs/pages/src/lib/aboutus/aboutus.component';
import { MisyonlarComponent } from 'src/libs/pages/src/lib/misyonlar/misyonlar.component';
const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'proje', component: ProjeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'misyonlar', component: MisyonlarComponent }
];

@NgModule({
  declarations: [],
  imports: [
    
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
