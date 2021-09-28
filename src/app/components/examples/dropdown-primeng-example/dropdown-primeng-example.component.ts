import { Component } from '@angular/core';
import {UtilsService} from "../../../services/utils.service";
import {EnumerablesTypesApp} from "../../../models/enumerablesTypesApp";

@Component({
  selector: 'app-dropdown-primeng-example',
  templateUrl: './dropdown-primeng-example.component.html',
  styleUrls: ['./dropdown-primeng-example.component.scss']
})
export class DropdownPrimengExampleComponent {
  objectExample = {
    id: 0,
    name: ''
  };

  objectSelected = {
    id: 1,
    name: 'Type 1'
  };

  list = UtilsService.getDataExample().data;

  enumPosition = EnumerablesTypesApp.enumPosition;
}
