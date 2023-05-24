import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/core/data/api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery_categories: any[] = [];
  gallery: any[] = [];
  displayGallery: any[] = [];
  displayDefaultLenght: number;
  displayLenghtIincreased: number = 0;
  remainigGaleryImages: number = 0;

  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isShowingAll: boolean = true;

  constructor(
    private api: ApiService
  ) {

    if(window.screen.width < 1440){
      this.displayDefaultLenght = 3;

    }else{
      this.displayDefaultLenght = 6;
      
    }

  }

  ngOnInit(): void {

    this.get_categories();
    this.get_gallery();
  }

  get_categories(){
    this.api.get_gallery_categories().subscribe((gallery_categories: any) => {
      this.gallery_categories = gallery_categories;
    });
  }

  get_gallery(){
    this.displayGallery = [];
    
    this.isLoading.next(true);
    this.api.get_gallery().subscribe((gallery: any) => {
      this.gallery = gallery;
      this.galleryDisplay();
      
      this.isLoading.next(false);

    });

  }

  galleryDisplay(dataLength: number = this.displayDefaultLenght){
    this.displayGallery = [];

    for (let index = 0; index < dataLength; index++) {
      this.displayGallery.push(this.gallery[index]);
    }
    
    this.remainigGaleryImages = this.gallery.length - this.displayGallery.length;
    // console.log(this.remainigGaleryImages);

  }

  seeMore(defaultIncrease: number = 3){

    if(!(this.remainigGaleryImages >= 3)){
      this.increaseDisplayNumber(this.remainigGaleryImages);
      return;
    }

    this.increaseDisplayNumber(defaultIncrease);

  }

  increaseDisplayNumber(increase: number){
    let start_from = this.displayDefaultLenght + this.displayLenghtIincreased;
    let finish_at = (this.displayDefaultLenght + this.displayLenghtIincreased) + increase;

    this.displayLenghtIincreased += increase;
    
    for (let index = start_from; index < finish_at; index++) {
      // console.log(index);
      this.displayGallery.push(this.gallery[index]);
    }
    this.remainigGaleryImages = this.gallery.length - this.displayGallery.length;
    // console.log(this.remainigGaleryImages);
  }

  get_gallery_by_category(name: string){
    this.displayGallery = [];
    this.displayLenghtIincreased = 0;

    if(name == 'all'){

      this.isShowingAll = true;

      this.get_gallery();
      this.gallery_categories_edit();
      return;

    }

    this.isShowingAll = false;
    this.isLoading.next(true);
    let categories_wanted: any[] = [];

    this.changeCategoryStatus(name);

    this.api.get_gallery().subscribe((gallery: any) => {
      gallery.forEach((element: any) => {
        if(element.category === name){
          categories_wanted.push(element);
        }else{}
      });

      this.displayGallery = categories_wanted;
      this.isLoading.next(false);

    });

  }

  changeCategoryStatus(name: string){

    this.gallery_categories_edit(name, true)

  }

  gallery_categories_edit(name?: string, change: boolean = false){
    this.gallery_categories.forEach((data: any) => {
      data.active = false;

      if(change){
        if(data.name == name){
          data.active = true;
  
        }else{}
        return;
      }
      
    });
  }

}
