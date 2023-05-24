import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  showModalScheduleVisit: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  scrollTo(destination: any){

    let element = document.querySelector(`#${destination}`) as HTMLLIElement || null;
    let element_offset = element.offsetTop - 90; // 90 - Header height

    scrollTo(0, element_offset);

  }

  scheduleVisitWasClicked(){
    this.showModalScheduleVisit.next(true);
  }
  hideScheduleVisit(){
    this.showModalScheduleVisit.next(false);
  }

}
