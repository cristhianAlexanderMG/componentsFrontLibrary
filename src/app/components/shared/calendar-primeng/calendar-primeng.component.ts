import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {EnumerablesTypesApp} from "../../../models/enumerablesTypesApp";

@Component({
  selector: 'app-calendar-primeng',
  templateUrl: './calendar-primeng.component.html',
  styleUrls: ['./calendar-primeng.component.scss']
})
export class CalendarPrimengComponent implements OnChanges {
  // Name of calendar
  @Input() label: string = 'Date';

  // Check if show the small
  @Input() showSmall: boolean = false;

  // Text by message on the small
  @Input() labelSmall: string = 'Message';

  // Value of date
  @Input() value: any = null;

  // Check if selected with time
  @Input() withTime: boolean = false;

  // Text of the tooltip
  @Input() labelTooltip: string = '';

  // Type of position on tooltip
  @Input() positionTooltip: string = EnumerablesTypesApp.enumPosition.Top;

  // Check if is disabled
  @Input() disabled: boolean = false;

  // Check if is required
  @Input() required: boolean = false;

  @Output() returnValue = new EventEmitter<any>();

  styleClassLabel: string = '';
  styleClass: string = '';

  format: string = "mm-dd-yy";
  hourFormat: string = "24";

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value != null) {
      if (changes.value.currentValue != null) {
        try {
          this.value = changes.value.currentValue.toDate();
        } catch (e) {
          this.value = changes.value.currentValue;
        }
      }
    }
  }

  validations() {
    if (this.required) {
      if (this.value == null || this.value == '') {
        this.styleClass = ' ng-invalid ng-dirty';
        this.styleClassLabel = ' p-error';
      } else {
        this.styleClass = '';
        this.styleClassLabel = '';
      }
    }
    this.returnValue.emit(this.value);
  }
}
