import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/navigation/nav.service';

@Component({
  selector: 'app-schedule-visit',
  templateUrl: './schedule-visit.component.html',
  styleUrls: ['./schedule-visit.component.css']
})
export class ScheduleVisitComponent implements OnInit {

  constructor(
    private nav: NavService
  ) { }

  ngOnInit(): void {
  }

  showModal(){
    this.nav.scheduleVisitWasClicked();
  }

}
