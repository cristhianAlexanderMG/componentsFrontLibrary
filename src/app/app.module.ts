import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import {PrimengModule} from "./modules/primeng/primeng.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InputPrimengComponent } from './components/shared/input-primeng/input-primeng.component';
import { InputPrimengExampleComponent } from './components/examples/input-primeng-example/input-primeng-example.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonPrimengExampleComponent } from './components/examples/button-primeng-example/button-primeng-example.component';
import { ButtonPrimengComponent } from './components/shared/button-primeng/button-primeng.component';
import { DropdownPrimengComponent } from './components/shared/dropdown-primeng/dropdown-primeng.component';
import { DropdownPrimengExampleComponent } from './components/examples/dropdown-primeng-example/dropdown-primeng-example.component';
import { WordPrimengExampleComponent } from './components/examples/word-primeng-example/word-primeng-example.component';
import { WordPrimengComponent } from './components/shared/word-primeng/word-primeng.component';
import { CalendarPrimengExampleComponent } from './components/examples/calendar-primeng-example/calendar-primeng-example.component';
import { CalendarPrimengComponent } from './components/shared/calendar-primeng/calendar-primeng.component';
import { TablePrimengComponent } from './components/shared/table-primeng/table-primeng.component';
import { TablePrimengExampleComponent } from './components/examples/table-primeng-example/table-primeng-example.component';
import { ThemesPrimengExampleComponent } from './components/examples/themes-primeng-example/themes-primeng-example.component';
import {ThemeService} from "./services/theme.service";
import { OrganizationCharExampleComponent } from './components/examples/organization-char-example/organization-char-example.component';
import { PickListExampleComponent } from './components/examples/pick-list-example/pick-list-example.component';
import { ProgressBarExampleComponent } from './components/examples/progress-bar-example/progress-bar-example.component';
import { ChartsExampleComponent } from './components/examples/charts-example/charts-example.component';
import { LoginComponent } from './components/login/login.component';
import { CardPrimengComponent } from './components/shared/card-primeng/card-primeng.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputPrimengComponent,
    InputPrimengExampleComponent,
    HomeComponent,
    ButtonPrimengExampleComponent,
    ButtonPrimengComponent,
    DropdownPrimengComponent,
    DropdownPrimengExampleComponent,
    WordPrimengExampleComponent,
    WordPrimengComponent,
    CalendarPrimengExampleComponent,
    CalendarPrimengComponent,
    TablePrimengComponent,
    TablePrimengExampleComponent,
    ThemesPrimengExampleComponent,
    OrganizationCharExampleComponent,
    PickListExampleComponent,
    ProgressBarExampleComponent,
    ChartsExampleComponent,
    LoginComponent,
    CardPrimengComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
