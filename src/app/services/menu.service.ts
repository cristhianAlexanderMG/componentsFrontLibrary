import { Injectable } from '@angular/core';
import { EnumerableIconsPrimeng } from '../models/enumerableIconsPrimeng';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  displayTerminal: boolean = false;
  displayFinder: boolean = false;

  getItemMenuDock(): any[] {
    return [];
  }

  getItemsMenuBar(): any[] {
    return [];
  }

  getItemsComponents() {
    return [
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
      },
      {
        label: 'Organization Char',
        icon: EnumerableIconsPrimeng.icon.sitemap,
        routerLink: 'organizationChar'
      }
    ];
  }
}
