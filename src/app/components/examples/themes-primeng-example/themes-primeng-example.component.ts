import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";
import {ThemeService} from "../../../services/theme.service";

@Component({
  selector: 'app-themes-primeng-example',
  templateUrl: './themes-primeng-example.component.html',
  styleUrls: ['./themes-primeng-example.component.scss']
})
export class ThemesPrimengExampleComponent {
  listThemes: any[] = [];

  constructor(public appComponent: AppComponent,
              private themeService: ThemeService) {
    this.listThemes = themeService.getThemes();
  }
}
