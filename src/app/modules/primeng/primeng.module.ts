import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenuModule} from 'primeng/menu';
import {MenubarModule} from "primeng/menubar";
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule,
    MenubarModule,
    CardModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    DropdownModule
  ],
  exports: [
    CommonModule,
    MenuModule,
    MenubarModule,
    CardModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    DropdownModule
  ]
})
export class PrimengModule { }
