import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    aboutUs="Hakkımızda";
    getInTouch="İletişim";
    missions="Misyonlar";
    stakeHolders="Paydaşlar"
    platform="Platform";
}
