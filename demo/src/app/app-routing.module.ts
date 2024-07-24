import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'src/libs/pages/src/lib/main-page/main-page.component';
import { AboutusComponent } from 'src/libs/pages/src/lib/aboutus/aboutus.component';
import { PlatformPageComponent } from 'src/libs/pages/src/lib/platform-page/platform-page.component';
import { OrganizasyonSemaComponent } from 'src/libs/pages/src/lib/aboutus/organizasyon-sema/organizasyon-sema.component';
import { MissionsComponent } from 'src/libs/pages/src/lib/missions/missions.component';
import { IletisimComponent } from 'src/libs/pages/src/lib/iletisim/iletisim.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'aboutus', component: AboutusComponent, children: [
  ]},
  { path: 'platform', component: PlatformPageComponent },
  { path: 'organizasyon-sema', component: OrganizasyonSemaComponent },
  { path: 'missions', component: MissionsComponent },
  { path: 'contact', component: IletisimComponent },
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
