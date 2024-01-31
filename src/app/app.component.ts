import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavService } from './shared/services/navigation/nav.service';
import { LinkService } from './shared/services/links/link.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hasMenuToShow: boolean = false;

  constructor(
    private nav: NavService,
    private link: LinkService,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: any
  ){
    this.meta.addTag({ name: 'og:title', content: 'Orlando Residencial - A vida Saudável e Confortável ao seu Alcance' });
    this.meta.addTag({ name: 'og:description', content: 'Temos os melhores imóveis com as melhores condições do mercado para você' });
    this.meta.addTag({ name: 'og:image', content: 'https://orlando.ao/assets/images/banner/bnr-1.jpg' });
    this.meta.addTag({ name: 'og:url', content: 'https://orlando.ao' });

    this.meta.addTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.addTag({ name: 'twitter:title', content: 'Orlando Residencial - A vida Saudável e Confortável ao seu Alcance' });
    this.meta.addTag({ name: 'twitter:description', content: 'Temos os melhores imóveis com as melhores condições do mercado para você' });
    this.meta.addTag({ name: 'twitter:image', content: 'https://orlando.ao/assets/images/banner/bnr-1.jpg' });
    this.meta.addTag({ name: 'twitter:url', content: 'https://orlando.ao' });
  }

  toggleMenuMobile(){
    this.hasMenuToShow = !this.hasMenuToShow;
  }

  slideTo(element: any){
    if(isPlatformBrowser(this.platformId)){
      this.nav.scrollTo(element);
    }
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
