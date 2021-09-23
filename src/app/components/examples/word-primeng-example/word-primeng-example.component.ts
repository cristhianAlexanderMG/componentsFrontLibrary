import { Component } from '@angular/core';
import {EnumerablesTypesApp} from "../../../models/enumerablesTypesApp";

@Component({
  selector: 'app-word-primeng-example',
  templateUrl: './word-primeng-example.component.html',
  styleUrls: ['./word-primeng-example.component.scss']
})
export class WordPrimengExampleComponent {
  enumTypeWord = EnumerablesTypesApp.enumTypeWord;
  enumTypeAlignment = EnumerablesTypesApp.enumTypeAlignment;
  enumTextTransform = EnumerablesTypesApp.enumTextTransform;
  enumTextDecoration = EnumerablesTypesApp.enumTextDecoration;


}
