import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnumerablesTypesApp } from "../../../models/enumerablesTypesApp";

@Component({
  selector: 'app-card-primeng',
  templateUrl: './card-primeng.component.html',
  styleUrls: ['./card-primeng.component.scss']
})
export class CardPrimengComponent {
  enumSize = EnumerablesTypesApp.enumSize;
  enumSeverity = EnumerablesTypesApp.enumSeverity;

  // Label to button confirm
  @Input() labelButtonConfirm: string = 'Confirm';

  // Label to button confirm
  @Input() labelButtonCancel: string = 'Cancel';

  // Route of image to header
  @Input() routeImageHeader: string = 'assets/showcase/images/demo/others/default-featured-image.png';

  // Width of image
  @Input() widthImage: string = '500px';

  // Height of card
  @Input() heightImage: string = '500px';

  // Width of card
  @Input() widthCard: string = '360px';

  // Title of card
  @Input() titleCard: string = 'Title';

  // Subtitle of card
  @Input() subtitleCard: string = 'Subtitle';

  // Confirmation if need a image into to header
  @Input() withImageHeader: boolean = false;

  // Confirmation if need a subtitle
  @Input() withSubtitle: boolean = false;

  // Confirmation if need a footer
  @Input() withFooter: boolean = false;

  // Event with success button
  @Output() onClickSuccess = new EventEmitter<any>();

  // Event with cancel button
  @Output() onClickCancel = new EventEmitter<any>();

  loadingButtonSuccess: boolean = false;
  disabledButtonSuccess: boolean = false;

  ngOnInit(): void {
  }

  // Event to click on success
  clickSuccess($event: any) {
    if ($event == undefined) {
      this.onClickSuccess.emit(true);
    } else {
      this.onClickSuccess.emit($event);
    }
  }

  // Event to click on cancel
  clickCancel($event: any) {
    if ($event == undefined) {
      this.onClickCancel.emit(false);
    } else {
      this.onClickCancel.emit($event);
    }
  }
}
