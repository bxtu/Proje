import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'src/libs/pages/src/lib/main-page/main-page.component';
import { AboutusComponent } from 'src/libs/pages/src/lib/main-page/aboutus/aboutus.component';
import { PlatformPageComponent } from 'src/libs/pages/src/lib/platform-page/platform-page.component';
import { OrganizasyonSemaComponent } from 'src/libs/pages/src/lib/organizasyon-sema/organizasyon-sema.component';
const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'platform', component: PlatformPageComponent },
  { path: 'organizasyon-sema', component: OrganizasyonSemaComponent },
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
