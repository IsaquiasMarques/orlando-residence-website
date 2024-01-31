import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  openlink(link: any){
    if(isPlatformBrowser(this.platformId)){
      window.open(link, '_blank');
    }
  }

  openWhatsapp(number: any, body: string = ''){
    if(body !== ''){
      if(isPlatformBrowser(this.platformId)){
        window.open(`https://api.whatsapp.com/send/?phone=${number}&text=${body}`, '_blank');
      }
      return;
    }

    if(isPlatformBrowser(this.platformId)){
      window.open(`https://wa.me/${number}`, '_blank');
    }
  }

}
