import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themes-primeng-example',
  templateUrl: './themes-primeng-example.component.html',
  styleUrls: ['./themes-primeng-example.component.scss']
})
export class ThemesPrimengExampleComponent implements OnInit {
  themeDark = 'dark';
  themeLight = 'light';

  constructor() { }

  ngOnInit(): void {
  }

}
