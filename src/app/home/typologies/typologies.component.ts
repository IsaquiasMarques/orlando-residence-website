import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-typologies',
  templateUrl: './typologies.component.html',
  styleUrls: ['./typologies.component.css']
})
export class TypologiesComponent implements OnInit {

  isOnLeft: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isOnRight: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  interval: any;
  boxes: any;
  IntervalNumber: number = 3;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit(): void {

    if(isPlatformBrowser(this.platformId)){
      this.boxes = document.querySelector('.section-content.typology') as HTMLElement;
    }

    this.setInterval(this.IntervalNumber, this.boxes);

  }

  showDetailsFirstTypology: boolean = false;
  showDetailsSecondTypology: boolean = false;
  showDetailsThirdTypology: boolean = false;

  detailsFirstDescription: string = 'Ver detalhes';
  detailsSecondDescription: string = 'Ver detalhes';
  detailsThirdDescription: string = 'Ver detalhes';

  toggleFirstTypology(){
    this.showDetailsFirstTypology = !this.showDetailsFirstTypology;
    if(this.showDetailsFirstTypology){
      this.detailsFirstDescription = 'Ocultar detalhes';
    }else{
      this.detailsFirstDescription = 'Ver detalhes';
    }
  }

  toggleSecondTypology(){
    this.showDetailsSecondTypology = !this.showDetailsSecondTypology;
    if(this.showDetailsSecondTypology){
      this.detailsSecondDescription = 'Ocultar detalhes';
    }else{
      this.detailsSecondDescription = 'Ver detalhes';
    }
  }

  toggleThirdTypology(){
    this.showDetailsThirdTypology = !this.showDetailsThirdTypology;
    if(this.showDetailsThirdTypology){
      this.detailsThirdDescription = 'Ocultar detalhes';
    }else{
      this.detailsThirdDescription = 'Ver detalhes';
    }
  }

  setInterval(interval: number, boxes: any){
    this.interval = setInterval(() => {

      if(this.isOnLeft.getValue()){
        
        if(isPlatformBrowser(this.platformId)){
          boxes.scrollTo(boxes.scrollHeight, 0);
        }

        this.isOnLeft.next(false);
        this.isOnRight.next(true);
        return;
      }

      if(this.isOnRight.getValue()){
        
        if(isPlatformBrowser(this.platformId)){
          boxes.scrollTo(0, 0);
        }
        this.isOnLeft.next(true);
        this.isOnRight.next(false);
        return;
      }

    }, interval * 1000);
  }

  stopInterval(){
    clearInterval(this.interval);
  }
  continueInterval(){
    this.setInterval(this.IntervalNumber, this.boxes);
  }

}
