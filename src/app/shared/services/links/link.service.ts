import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor() { }

  openlink(link: any){
    window.open(link, '_blank');
  }

  openWhatsapp(number: any, body: string = ''){
    if(body !== ''){
      window.open(`https://api.whatsapp.com/send/?phone=${number}&text=${body}`, '_blank');
      return;
    }

    window.open(`https://wa.me/${number}`, '_blank');
  }

}
