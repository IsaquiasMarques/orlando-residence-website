import { Component } from '@angular/core';
import { NavService } from './shared/services/navigation/nav.service';
import { LinkService } from './shared/services/links/link.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hasMenuToShow: boolean = false;

  constructor(
    private nav: NavService,
    private link: LinkService
  ){ }

  toggleMenuMobile(){
    this.hasMenuToShow = !this.hasMenuToShow;
  }

  slideTo(element: any){
    this.nav.scrollTo(element);
    this.hasMenuToShow = false;
  }

  openLink(number: string){
    this.link.openlink(`tel:${number}`);
  }

  openWhatsapp(number: string){
    this.link.openWhatsapp(number);
  }

  openSocialMedia(url: string){
    this.link.openlink(url);
  }

}
