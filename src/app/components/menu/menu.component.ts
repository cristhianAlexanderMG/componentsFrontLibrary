import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  items: MenuItem[];
  dockItems: MenuItem[];
  itemsDisplayComponents: MenuItem[];
  displayFinder: boolean = false;

  constructor(private menuService: MenuService) {
    this.items = this.getItemsMenu();
    this.dockItems = this.getItemsDock();
    this.itemsDisplayComponents = this.getItemsDisplayComponents();
  }

  getItemsMenu(): any[] {
    return this.menuService.getItemsMenuBar();
  }

  getItemsDock(): any[] {
    return [
      {
        label: 'Home',
        tooltipOptions: {
          tooltipLabel: "Home",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
        },
        icon: "https://img.icons8.com/stickers/100/000000/home-page.png",
        routerLink: 'home'
      },
      {
        label: 'Components',
        tooltipOptions: {
          tooltipLabel: "Components",
          tooltipPosition: 'top',
          positionLeft: 15,
          positionTop: -15
        },
        icon: "https://img.icons8.com/stickers/100/000000/full-tool-storage-box-.png",
        command: () => {
          this.displayFinder = true;
        }
      },
      {
        label: 'Table CRUD',
        tooltipOptions: {
          tooltipLabel: "Table CRUD",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
        },
        icon: "https://img.icons8.com/stickers/100/000000/day-view.png",
        routerLink: 'table'
      },
      {
        label: 'Themes',
        tooltipOptions: {
          tooltipLabel: "Themes",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
        },
        icon: "https://img.icons8.com/stickers/100/000000/paint-palette.png",
        routerLink: 'themes'
      }
    ];
  }

  getItemsDisplayComponents(): any {
    return this.menuService.getItemsComponents();
  }
}
