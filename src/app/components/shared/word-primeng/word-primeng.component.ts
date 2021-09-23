import {Component, Input, OnInit} from '@angular/core';
import {EnumerablesTypesApp} from "../../../models/enumerablesTypesApp";

@Component({
  selector: 'app-word-primeng',
  templateUrl: './word-primeng.component.html',
  styleUrls: ['./word-primeng.component.scss']
})
export class WordPrimengComponent implements OnInit {
  // Value of label
  @Input() value: any = null;

  // Type label
  @Input() type: string = EnumerablesTypesApp.enumTypeWord.Normal;

  // Type alignment of label
  @Input() alignment: string = EnumerablesTypesApp.enumTypeAlignment.Center;

  // Type transform of label
  @Input() textTransform: string = EnumerablesTypesApp.enumTextTransform.Normal;

  // Type decoration of label
  @Input() textDecoration: string = EnumerablesTypesApp.enumTextDecoration.Normal;

  // If label is strong
  @Input() strong: boolean = false;

  // If label is a link, need it this reference
  @Input() refOfTheLink: string = '';

  enumTypeWord = EnumerablesTypesApp.enumTypeWord;
  enumTextDecoration = EnumerablesTypesApp.enumTextDecoration;
  styleClass: string = '';

  ngOnInit(): void {
    this.identifyAlignmentOfTheWord();
  }

  private identifyAlignmentOfTheWord(): void {
    switch (this.alignment) {
      case EnumerablesTypesApp.enumTypeAlignment.Start: {
        this.styleClass = this.styleClass + ' text-start';
        break;
      }
      case EnumerablesTypesApp.enumTypeAlignment.Center: {
        this.styleClass = this.styleClass + ' text-center';
        break;
      }
      case EnumerablesTypesApp.enumTypeAlignment.End: {
        this.styleClass = this.styleClass + ' text-end';
        break;
      }
    }
    this.identifyTextTransformOfTheWord();
  }

  private identifyTextTransformOfTheWord(): void {
    switch (this.textTransform) {
      case EnumerablesTypesApp.enumTextTransform.Normal: {
        break;
      }
      case EnumerablesTypesApp.enumTextTransform.Capitalize: {
        this.styleClass = this.styleClass + ' text-capitalize';
        break;
      }
      case EnumerablesTypesApp.enumTextTransform.Lowercase: {
        this.styleClass = this.styleClass + ' text-lowercase';
        break;
      }
      case EnumerablesTypesApp.enumTextTransform.Uppercase: {
        this.styleClass = this.styleClass + ' text-uppercase';
        break;
      }
    }
    this.identifyTextDecorationOfTheWord();
  }

  private identifyTextDecorationOfTheWord(): void {
    switch (this.textDecoration) {
      case EnumerablesTypesApp.enumTextDecoration.Normal: {
        break;
      }
      case EnumerablesTypesApp.enumTextDecoration.Underline: {
        this.styleClass = this.styleClass + ' text-decoration-underline';
        break;
      }
      case EnumerablesTypesApp.enumTextDecoration.Link: {
        this.styleClass = this.styleClass + ' text-decoration-none';
        break;
      }
    }
  }
}
