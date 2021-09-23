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
    WordPrimengComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
