import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // let windowHeight = window.innerHeight;
    // let video = document.querySelector('div.media video') as HTMLElement || null;
    
    // let revealTop = video.getBoundingClientRect().top;
    // let revealPoint = 150;

    // console.log(revealTop);

    // if(revealTop < (windowHeight - revealPoint)){
    //   video.classList.add('active');
    // }else{
    //   video.classList.remove('active');
    // }
    
  }

  @HostListener('window:scroll', ['$event']) scrollEvent(){
    var element = document.elementFromPoint((window.screen.width / 2), (window.screen.height / 2)) as any;
    let video = document.querySelector('div.media video#about') as any;

    if(element?.tagName == "VIDEO"){
      element?.play();

    }else{
      video?.pause();

    }
  }

}
