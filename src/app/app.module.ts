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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputPrimengComponent,
    InputPrimengExampleComponent,
    HomeComponent,
    ButtonPrimengExampleComponent,
    ButtonPrimengComponent
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
