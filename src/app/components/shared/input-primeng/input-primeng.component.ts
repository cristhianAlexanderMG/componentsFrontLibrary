import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EnumerablesTypesApp} from "../../../models/enumerablesTypesApp";
import {UtilsService} from "../../../services/utils.service";

@Component({
  selector: 'app-input-primeng',
  templateUrl: './input-primeng.component.html',
  styleUrls: ['./input-primeng.component.scss']
})
export class InputPrimengComponent implements OnInit {
  // Value by default
  @Input() value: any = null;

  // Name of input
  @Input() label: string = 'Label';

  // Text of the small
  @Input() labelSmall: string = 'Small';

  // Name of icon
  @Input() icon: string = '';

  // Type of input
  @Input() type: string = EnumerablesTypesApp.enumTypeInput.Text;

  // Size of input
  @Input() size: string = EnumerablesTypesApp.enumSize.Normal;

  // Check if had a range of dates
  @Input() withRangeOfDates: boolean = false;

  // Check if had a range of numbers
  @Input() withRangeOfNumbers: boolean = false;

  // Check if show small
  @Input() showSmall: boolean = false;

  // Check if show icon
  @Input() withIcon: boolean = false;

  // Check if is required
  @Input() required: boolean = false;

  // Check if is textArea
  @Input() isTextArea: boolean = false;

  // Check if is disabled
  @Input() disabled: boolean = false;

  // Range of number minimum
  @Input() minimumNumber: number = 0;

  // Range of number maximum
  @Input() maximumNumber: number = 0;

  // Range of date minimum
  @Input() minimumDate: string = new Date().toDateString();

  // Range of date maximum
  @Input() maximumDate: string = new Date().toDateString();

  // Object to return
  @Output() returnValue = new EventEmitter<any>();

  styleClass: string = '';
  styleClassLabel: string = '';

  ngOnInit(): void {
    this.buildInput();
  }

  private buildInput(): void {
    this.identifySizeOfTheInput();
    this.identifyTypeOfTheInput();
  }

  private identifySizeOfTheInput(): void {
    switch (this.size) {
      case EnumerablesTypesApp.enumSize.Small: {
        this.styleClass = this.styleClass + ' p-inputtext-sm';
        break;
      }
      case EnumerablesTypesApp.enumSize.Normal: {
        this.styleClass = this.styleClass + '';
        break;
      }
      case EnumerablesTypesApp.enumSize.Large: {
        this.styleClass = this.styleClass + ' p-inputtext-lg';
        break;
      }
    }
  }

  private identifyTypeOfTheInput(): void {
    switch (this.type) {
      case EnumerablesTypesApp.enumTypeInput.Text: {
        if (this.value != null) {
          this.value = this.value.toString();
        }
        break;
      }
      case EnumerablesTypesApp.enumTypeInput.Number: {
        break;
      }
      case EnumerablesTypesApp.enumTypeInput.Date: {
        if (this.value != null) {
          this.value = UtilsService.convertDateToCorrectFormat(this.value.toDate());
        }
        break;
      }
    }
  }

  validations() {
    this.emptyTextValidation();
    switch (this.type) {
      case EnumerablesTypesApp.enumTypeInput.Text: {
        break;
      }
      case EnumerablesTypesApp.enumTypeInput.Number: {
        this.rangeNumbersValidation();
        break;
      }
      case EnumerablesTypesApp.enumTypeInput.Date: {
        this.rangeDatesValidation();
        break;
      }
      case EnumerablesTypesApp.enumTypeInput.Email: {
        this.validationEmail();
        break;
      }
    }
    this.returnValue.emit(this.value);
  }

  private validationEmail() {
    if (!UtilsService.emailWithCorrectFormat(this.value)) {
      this.styleClass = ' ng-invalid ng-dirty';
      this.styleClassLabel = ' p-error';
    } else {
      this.styleClass = '';
      this.styleClassLabel = '';
    }
  }

  private emptyTextValidation() {
    if (this.required) {
      if (this.value == null || this.value == '') {
        this.styleClass = ' ng-invalid ng-dirty';
        this.styleClassLabel = ' p-error';
      } else {
        this.styleClass = '';
        this.styleClassLabel = '';
      }
    }
  }

  private rangeNumbersValidation() {
    if (this.withRangeOfNumbers) {
      if (this.minimumNumber <= this.maximumNumber) {
        if (this.value >= this.minimumNumber) {
          if (this.value <= this.maximumNumber) {
            this.styleClass = '';
            this.styleClassLabel = '';
          } else {
            this.styleClass = ' ng-invalid ng-dirty';
            this.styleClassLabel = ' p-error';
          }
        } else {
          this.styleClass = ' ng-invalid ng-dirty';
          this.styleClassLabel = ' p-error';
        }
      } else {
        this.styleClass = ' ng-invalid ng-dirty';
        this.styleClassLabel = ' p-error';
      }
    }
  }

  private rangeDatesValidation() {
    if (this.withRangeOfDates) {
      if (new Date(this.minimumDate) <= new Date(this.maximumDate)) {
        if (new Date(this.value) >= new Date(this.minimumDate)) {
          if (new Date(this.value) <= new Date(this.maximumDate)) {
            this.styleClass = '';
            this.styleClassLabel = '';
          } else {
            this.styleClass = ' ng-invalid ng-dirty';
            this.styleClassLabel = ' p-error';
          }
        } else {
          this.styleClass = ' ng-invalid ng-dirty';
          this.styleClassLabel = ' p-error';
        }
      } else {
        this.styleClass = ' ng-invalid ng-dirty';
        this.styleClassLabel = ' p-error';
      }
    }
  }
}
