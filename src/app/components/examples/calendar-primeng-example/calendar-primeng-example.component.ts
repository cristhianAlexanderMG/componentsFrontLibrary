import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../../../services/utils.service";

@Component({
  selector: 'app-calendar-primeng-example',
  templateUrl: './calendar-primeng-example.component.html',
  styleUrls: ['./calendar-primeng-example.component.scss']
})
export class CalendarPrimengExampleComponent {
  date: string = UtilsService.convertDateToCorrectFormat(new Date());

}
