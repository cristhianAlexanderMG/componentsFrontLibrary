import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { EnumerableIconsPrimeng } from 'src/app/models/enumerableIconsPrimeng';
import { Profile } from './../../models/profile';
import { MenuService } from 'src/app/services/menu.service';
import { ProfileService } from 'src/app/services/profile.service';

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
  displayProfile: boolean = false;
  menuDock = true;
  profile: Profile = new Profile();

  constructor(private menuService: MenuService,
    private profileService: ProfileService) {
    this.items = this.getItemsMenu();
    this.dockItems = this.getItemsDock();
    this.itemsDisplayComponents = this.getItemsDisplayComponents();
    this.profile = this.getProfile();
  }

  getItemsMenu(): any[] {
    return [
      {
        label: 'Home',
        icon: EnumerableIconsPrimeng.icon.home,
        routerLink: 'home',
      },
      {
        label: 'Components',
        icon: EnumerableIconsPrimeng.icon.thLarge,
        items: this.menuService.getItemsComponents()
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
      },
      {
        label: 'Change Type Menu',
        icon: EnumerableIconsPrimeng.icon.refresh,
        command: () => {
          this.menuDock = !this.menuDock;
        }
      }
    ];
  }

  getItemsDock(): any[] {
    return [
      {
        label: 'Profile',
        tooltipOptions: {
          tooltipLabel: "Profile",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
        },
        icon: "assets/showcase/images/demo/avatar/medica.jpg",
        command: () => {
          this.displayProfile = !this.displayProfile;
        }
      },
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
      },
      {
        label: 'Change Type Menu',
        tooltipOptions: {
          tooltipLabel: "Change Type Menu",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
        },
        icon: "https://img.icons8.com/stickers/100/000000/available-updates.png",
        command: () => {
          this.menuDock = !this.menuDock;
        }
      }
    ];
  }

  getItemsDisplayComponents(): any {
    return this.menuService.getItemsComponents();
  }

  showPanelProfile() {
    this.displayProfile = true;
  }

  getProfile(): Profile {
    return this.profileService.getProfile();
  }
}
