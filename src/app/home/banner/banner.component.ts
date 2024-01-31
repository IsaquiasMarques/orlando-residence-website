import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ApiService } from 'src/app/core/data/api.service';
import { LinkService } from 'src/app/shared/services/links/link.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  countUntil: number = 5;
  counter: number = (this.countUntil * 1000);

  constructor(
    private link: LinkService,
    private api: ApiService,
    @Inject(PLATFORM_ID) private platfformId: any
  ) { }
  
  imagesOnSlide!: any[];

  ngOnInit(): void {
    this.imagesOnSlide = this.api.getBannerImages();
    this.refreshSlideOrder();
  }

  refreshSlideOrder(){
    if(isPlatformBrowser(this.platfformId)){
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
  }

  get_in_touch(number: string){
    this.link.openlink(number);
  }

}
