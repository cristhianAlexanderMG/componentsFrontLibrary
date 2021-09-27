import { Component } from '@angular/core';
import {EnumerableIconsPrimeng} from "../../../models/enumerableIconsPrimeng";
import {EnumerablesTypesApp} from "../../../models/enumerablesTypesApp";

@Component({
  selector: 'app-button-primeng-example',
  templateUrl: './button-primeng-example.component.html',
  styleUrls: ['./button-primeng-example.component.scss']
})
export class ButtonPrimengExampleComponent {
  enumIcon = EnumerableIconsPrimeng.icon;
  enumPosition = EnumerablesTypesApp.enumPosition;
  enumSeverity = EnumerablesTypesApp.enumSeverity;
  enumSize = EnumerablesTypesApp.enumSize;

  itemsButton = [
    {
      label: 'Update',
      icon: 'pi pi-refresh'
    },
    {
      label: 'Delete',
      icon: 'pi pi-times'
    },
    {
      label: 'Angular.io',
      icon: 'pi pi-info',
      url: 'https://primefaces.org/primeng'
    },
    {
      separator: true
    },
    {
      label: 'Setup',
      icon: 'pi pi-cog',
      routerLink: ['/home']
    }
  ];
}
