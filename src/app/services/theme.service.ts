import { Injectable, Inject } from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  switchTheme(theme: string) {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }
  }

  getThemes(): any[] {
    return [
      {
        name: 'Arya Blue',
        code: 'arya-blue'
      },
      {
        name: 'Arya Green',
        code: 'arya-green'
      },
      {
        name: 'Arya Orange',
        code: 'arya-orange'
      },
      {
        name: 'Arya Purple',
        code: 'arya-purple'
      },
      {
        name: 'Vela Blue',
        code: 'vela-blue'
      },
      {
        name: 'Vela Green',
        code: 'vela-green'
      },
      {
        name: 'Vela Orange',
        code: 'vela-orange'
      },
      {
        name: 'Vela Purple',
        code: 'vela-purple'
      },
    ];
  }
}
