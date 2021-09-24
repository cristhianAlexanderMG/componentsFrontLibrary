import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenuModule} from 'primeng/menu';
import {MenubarModule} from "primeng/menubar";
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {EditorModule} from 'primeng/editor';

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
    DropdownModule,
    CalendarModule,
    ToolbarModule,
    DialogModule,
    TableModule,
    EditorModule
  ],
  exports: [
    CommonModule,
    MenuModule,
    MenubarModule,
    CardModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    ToolbarModule,
    DialogModule,
    TableModule,
    EditorModule
  ]
})
export class PrimengModule { }
