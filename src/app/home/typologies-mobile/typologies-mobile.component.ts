import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typologies-mobile',
  templateUrl: './typologies-mobile.component.html',
  styleUrls: ['./typologies-mobile.component.css']
})
export class TypologiesMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
