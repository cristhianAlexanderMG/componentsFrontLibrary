import { Component } from '@angular/core';
import {EnumerableIconsPrimeng} from "../../../models/enumerableIconsPrimeng";
import {EnumerablesTypesApp} from "../../../models/enumerablesTypesApp";

@Component({
  selector: 'app-input-primeng-example',
  templateUrl: './input-primeng-example.component.html',
  styleUrls: ['./input-primeng-example.component.scss']
})
export class InputPrimengExampleComponent {
  enumIcon = EnumerableIconsPrimeng.icon;
  enumTypeInput = EnumerablesTypesApp.enumTypeInput;
  enumSize = EnumerablesTypesApp.enumSize;

  date1 = new Date().toLocaleDateString();
  date2 = new Date().toLocaleDateString();

  constructor() {
    console.log(this.date1);
    console.log(this.date2);
  }
}
