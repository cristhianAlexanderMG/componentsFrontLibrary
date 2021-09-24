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
        name: 'Bootstrap4 Dark Blue',
        code: 'bootstrap4-dark-blue'
      },
      {
        name: 'Bootstrap4 Dark Purple',
        code: 'bootstrap4-dark-purple'
      },
      {
        name: 'Bootstrap4 Light Blue',
        code: 'bootstrap4-light-blue'
      },
      {
        name: 'Bootstrap4 Light Purple',
        code: 'bootstrap4-light-purple'
      },
      {
        name: 'Fluent Light',
        code: 'fluent-light'
      },
      {
        name: 'Luna Amber',
        code: 'luna-amber'
      },
      {
        name: 'Luna Blue',
        code: 'luna-blue'
      },
      {
        name: 'Luna Green',
        code: 'luna-green'
      },
      {
        name: 'Luna Pink',
        code: 'luna-pink'
      },
      {
        name: 'Mdc Dark Deeppurple',
        code: 'mdc-dark-deeppurple'
      },
      {
        name: 'Mdc Dark Indigo',
        code: 'mdc-dark-indigo'
      },
      {
        name: 'Mdc Light Deeppurple',
        code: 'mdc-light-deeppurple'
      },
      {
        name: 'Mdc Light Indigo',
        code: 'mdc-light-indigo'
      },
      {
        name: 'Md Dark Deeppurple',
        code: 'md-dark-deeppurple'
      },
      {
        name: 'Md Dark Indigo',
        code: 'md-dark-indigo'
      },
      {
        name: 'Md Light Deeppurple',
        code: 'md-light-deeppurple'
      },
      {
        name: 'Md Light Indigo',
        code: 'md-light-indigo'
      },
      {
        name: 'Nova',
        code: 'nova'
      },
      {
        name: 'Nova Accent',
        code: 'nova-accent'
      },
      {
        name: 'Nova Alt',
        code: 'nova-alt'
      },
      {
        name: 'Rhea',
        code: 'rhea'
      },
      {
        name: 'Saga Blue',
        code: 'saga-blue'
      },
      {
        name: 'Saga Green',
        code: 'saga-green'
      },
      {
        name: 'Saga Orange',
        code: 'saga-orange'
      },
      {
        name: 'Saga Purple',
        code: 'saga-purple'
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
