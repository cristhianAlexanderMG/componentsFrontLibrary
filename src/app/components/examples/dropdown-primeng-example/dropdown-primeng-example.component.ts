import { Component } from '@angular/core';

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

  list = [
    {
      id: 1,
      name: 'Type 1'
    },
    {
      id: 2,
      name: 'Type 2'
    }
  ];
}
