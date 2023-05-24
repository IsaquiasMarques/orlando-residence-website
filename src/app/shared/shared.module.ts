import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleVisitComponent } from './components/schedule-visit/schedule-visit.component';
import { NavService } from './services/navigation/nav.service';
import { LinkService } from './services/links/link.service';



@NgModule({
  declarations: [
    ScheduleVisitComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    NavService,
    LinkService
  ],
  exports: [
    ScheduleVisitComponent
  ]
})
export class SharedModule { }
