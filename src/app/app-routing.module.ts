import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {InputPrimengExampleComponent} from "./components/examples/input-primeng-example/input-primeng-example.component";
import {ButtonPrimengExampleComponent} from "./components/examples/button-primeng-example/button-primeng-example.component";
import {DropdownPrimengExampleComponent} from "./components/examples/dropdown-primeng-example/dropdown-primeng-example.component";
import {WordPrimengExampleComponent} from "./components/examples/word-primeng-example/word-primeng-example.component";
import {CalendarPrimengExampleComponent} from "./components/examples/calendar-primeng-example/calendar-primeng-example.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'input', component: InputPrimengExampleComponent },
  { path: 'button', component: ButtonPrimengExampleComponent },
  { path: 'dropdown', component: DropdownPrimengExampleComponent },
  { path: 'word', component: WordPrimengExampleComponent },
  { path: 'calendar', component: CalendarPrimengExampleComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
