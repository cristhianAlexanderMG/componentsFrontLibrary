import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenuModule} from 'primeng/menu';
import {MenubarModule} from "primeng/menubar";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule,
    MenubarModule
  ],
  exports: [
    CommonModule,
    MenuModule,
    MenubarModule
  ]
})
export class PrimengModule { }
