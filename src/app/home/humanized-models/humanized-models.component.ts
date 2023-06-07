import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-humanized-models',
  templateUrl: './humanized-models.component.html',
  styleUrls: ['./humanized-models.component.css']
})
export class HumanizedModelsComponent implements OnInit {

  countUntil: number = 5;
  counter: number = (this.countUntil * 1000);

  imagesOnSlide: any[] = [
    {
      id: 2,
      title: 'Modelo humanizado 1',
      image: 'assets/images/humanized-models/model-1.jpg',
      primary: true,
    },
    {
      id: 3,
      title: 'Modelo humanizado 2',
      image: 'assets/images/humanized-models/model-2.jpg',
      primary: false,
    },
  ];

  imagesOnSlideTwo: any[] = [
    {
      id: 2,
      title: 'Modelo humanizado 1',
      image: 'assets/images/humanized-models/model-3.jpg',
      primary: true,
    },
    {
      id: 3,
      title: 'Modelo humanizado 2',
      image: 'assets/images/humanized-models/model-4.jpg',
      primary: false,
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.start();
  }

  start(){

    let slideTimer = setInterval(() => {
      
      let counter = 1;

      if(counter === this.countUntil){
        clearInterval(slideTimer);
        // this.refreshSlideOrder();
        return;
      }

      counter++;

    }, this.counter);

    this.refreshSlideOrder();
    this.refreshSlideOrderTwo();
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

  refreshSlideOrderTwo(){
    setInterval(() => {
      
      let primaryImageIndex = this.imagesOnSlideTwo.findIndex(el => el.primary === true);  
      this.imagesOnSlideTwo[primaryImageIndex].primary = false;

      if(primaryImageIndex == (this.imagesOnSlideTwo.length - 1)){
        this.imagesOnSlideTwo[0].primary = true;

        return;
      }
      
      this.imagesOnSlideTwo[primaryImageIndex + 1].primary = true;

    }, this.counter);
  }

  @HostListener('window:scroll', ['$event']) scrollEvent(){

    let windowHeight = window.innerHeight;
    let sliderLeft = document.querySelectorAll('div.slide-from-left') as NodeListOf<HTMLElement> || null;
    let sliderRight = document.querySelectorAll('div.slide-from-right') as NodeListOf<HTMLElement> || null;
    
    sliderLeft.forEach(element => {
      let revealTop = element.getBoundingClientRect().top;
      let revealPoint = 150;

      if(revealTop < (windowHeight - revealPoint)){
        element.classList.add('active');
      }else{
        element.classList.remove('active');
      }

    });

    sliderRight.forEach(element => {
      let revealTop = element.getBoundingClientRect().top;
      let revealPoint = 150;

      if(revealTop < (windowHeight - revealPoint)){
        element.classList.add('active');
      }else{
        element.classList.remove('active');
      }

    });

  }

}
