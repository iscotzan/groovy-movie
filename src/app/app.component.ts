import { Component, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'groovie-movie';
  showScroll: boolean;
  showScrollHeight: number = 300;
  hideScrollHeight: number = 10;
  currentYear: number = new Date().getFullYear();

  constructor(
    public router: Router,
    private location: Location,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(APP_ID) private appId: string
  ) {
  }
  scrollToTop() {
    console.log('top from mat-drawer-content: ', document.getElementsByClassName('mat-drawer-content')[0].scrollTop);
    document.getElementsByClassName('mat-drawer-content')[0].scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

  }


}
