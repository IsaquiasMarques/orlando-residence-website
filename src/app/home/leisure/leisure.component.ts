import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.css']
})
export class LeisureComponent implements OnInit {

  countUntil: number = 5;
  counter: number = (this.countUntil * 1000);

  progress: string = '0%';
  progressIncrease: boolean = true;

  imagesOnSlide: any[] = [
    // {
    //   id: 1,
    //   title: 'Restaurantes',
    //   image: 'assets/images/leisure/pool.png',
    //   primary: true,
    // },
    {
      id: 2,
      title: 'Bar e Piscina',
      image: 'assets/images/leisure/leisure-1.jpg',
      primary: true,
    },
    {
      id: 6,
      title: 'Quadra Multiuso',
      image: 'assets/images/leisure/leisure-2.jpg',
      primary: false,
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.start();
  }

  start(){

    let slideTimer = setInterval(() => {

      // this.progress = ((counter * (100 / this.countUntil)).toString())+"%";
      this.progressIncrease = true;
      this.progress = '100%';
      
      let counter = 1;

      if(counter === this.countUntil){
        clearInterval(slideTimer);
        // this.refreshSlideOrder();
        return;
      }

      counter++;

    }, this.counter);

    this.refreshSlideOrder();
  }

  refreshSlideOrder(){
    setInterval(() => {
      
      let primaryImageIndex = this.imagesOnSlide.findIndex(el => el.primary === true);  
      this.imagesOnSlide[primaryImageIndex].primary = false;

      if(primaryImageIndex == (this.imagesOnSlide.length - 1)){
        this.imagesOnSlide[0].primary = true;
        this.progressIncrease = false;
        this.progress = '0%';
        
        return;
      }
      
      this.imagesOnSlide[primaryImageIndex + 1].primary = true;

    }, this.counter);
  }

}
