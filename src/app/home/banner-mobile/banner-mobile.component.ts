import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/data/api.service';
import { LinkService } from 'src/app/shared/services/links/link.service';

@Component({
  selector: 'app-banner-mobile',
  templateUrl: './banner-mobile.component.html',
  styleUrls: ['./banner-mobile.component.css']
})
export class BannerMobileComponent implements OnInit {

  countUntil: number = 5;
  counter: number = (this.countUntil * 1000);
  
  constructor(
    private link: LinkService,
    private api: ApiService
  ) { }
  
  imagesOnSlide: any[] = this.api.imagesOnSlide_banner_home;

  ngOnInit(): void {
    this.refreshSlideOrder();
  }

  refreshSlideOrder(){
    setInterval(() => {
      
      let primaryImageIndex = this.imagesOnSlide.findIndex(el => el.primary === true);  
      this.imagesOnSlide[primaryImageIndex].primary = false;

      if(primaryImageIndex == (this.imagesOnSlide.length - 1)){
        this.imagesOnSlide[0].primary = true;
        
        return;
      }
      
      this.imagesOnSlide[primaryImageIndex + 1].primary = true;

    }, this.counter);
  }

  get_in_touch(number: string){
    this.link.openlink(number);
  }

}
