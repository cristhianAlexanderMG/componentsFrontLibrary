import { Component } from '@angular/core';
import {ThemeService} from "../../../services/theme.service";

@Component({
  selector: 'app-themes-primeng-example',
  templateUrl: './themes-primeng-example.component.html',
  styleUrls: ['./themes-primeng-example.component.scss']
})
export class ThemesPrimengExampleComponent {
  listThemes: any[] = [];

  constructor(private themeService: ThemeService) {
    this.listThemes = themeService.getThemes();
  }

  public changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
}
