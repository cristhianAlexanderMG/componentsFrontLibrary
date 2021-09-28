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
  dockItems: MenuItem[];

  displayTerminal: boolean = false;
  displayFinder: boolean = false;

  constructor() {
    this.items = this.createItemsMenu();
    this.dockItems = this.createItemsDock();
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
            label: 'Button',
            icon: EnumerableIconsPrimeng.icon.circleOn,
            routerLink: 'button'
          },
          {
            label: 'Calendar',
            icon: EnumerableIconsPrimeng.icon.calendar,
            routerLink: 'calendar'
          },
          {
            label: 'Dropdown',
            icon: EnumerableIconsPrimeng.icon.bars,
            routerLink: 'dropdown'
          },
          {
            label: 'Input',
            icon: EnumerableIconsPrimeng.icon.minus,
            routerLink: 'input'
          },
          {
            label: 'Word',
            icon: EnumerableIconsPrimeng.icon.info,
            routerLink: 'word'
          }
        ]
      },
      {
        label: 'Table CRUD',
        icon: EnumerableIconsPrimeng.icon.table,
        routerLink: 'table'
      },
      {
        label: 'Themes',
        icon: EnumerableIconsPrimeng.icon.palette,
        routerLink: 'themes'
      }
    ];
  }

  createItemsDock(): any[] {
    return [
      {
        label: 'Finder',
        tooltipOptions: {
          tooltipLabel: "Finder",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
        },
        icon: "assets/showcase/images/dock/finder.svg",
        command: () => {
          this.displayFinder = true;
        }
      },
      {
        label: 'Terminal',
        tooltipOptions: {
          tooltipLabel: "Terminal",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
        },
        icon: "assets/showcase/images/dock/terminal.svg",
        command: () => {
          this.displayTerminal = true;
        }
      },
      {
        label: 'App Store',
        tooltipOptions: {
          tooltipLabel: "App Store",
          tooltipPosition: 'top',
          positionLeft: 15,
          positionTop: -15
        },
        icon: "assets/showcase/images/dock/appstore.svg"
      },
      {
        label: 'Safari',
        tooltipOptions: {
          tooltipLabel: "Safari",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
        },
        icon: "assets/showcase/images/dock/safari.svg"
      },
      {
        label: 'Photos',
        tooltipOptions: {
          tooltipLabel: "Photos",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
        },
        icon: "assets/showcase/images/dock/photos.svg"
      },
      {
        label: 'GitHub',
        icon: "assets/showcase/images/dock/github.svg",
      },
      {
        label: 'Trash',
        icon: "assets/showcase/images/dock/trash.png"
      }
    ];
  }
}
