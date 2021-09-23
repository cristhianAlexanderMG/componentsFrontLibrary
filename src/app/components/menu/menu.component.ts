import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {EnumerableIconsPrimeng} from "../../models/enumerableIconsPrimeng";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  items: MenuItem[];

  constructor() {
    this.items = this.createItemsMenu();
  }

  createItemsMenu(): any[] {
    return [
      {
        label: 'Home',
        icon: EnumerableIconsPrimeng.icon.home,
        routerLink: 'home',
      },
      {
        label: 'Components',
        icon: EnumerableIconsPrimeng.icon.thLarge,
        items: [
          {
            label: 'Input',
            icon: EnumerableIconsPrimeng.icon.minus,
            routerLink: 'input'
          },
          {
            label: 'Button',
            icon: EnumerableIconsPrimeng.icon.circleOn,
            routerLink: 'button'
          }
          ]
      },
      {
        label: 'Table CRUD',
        icon: EnumerableIconsPrimeng.icon.table
      }
      ];
  }
}
