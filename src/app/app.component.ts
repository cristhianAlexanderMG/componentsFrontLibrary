import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {ThemeService} from "./services/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'componentsFrontLibrary';

  constructor(private primengConfig: PrimeNGConfig,
              private themeService: ThemeService) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  public changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
}
