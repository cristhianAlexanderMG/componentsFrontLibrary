import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EnumerablesTypesApp} from "../../../models/enumerablesTypesApp";
import {UtilsService} from "../../../services/utils.service";
import {EnumerableIconsPrimeng} from "../../../models/enumerableIconsPrimeng";

@Component({
  selector: 'app-input-primeng',
  templateUrl: './input-primeng.component.html',
  styleUrls: ['./input-primeng.component.scss']
})
export class InputPrimengComponent implements OnInit {
  // Value by default
  @Input() value: any = null;

  // Value by default
  @Input() listRadioButtons: any = [];

  // Name of input
  @Input() label: string = '';

  // Text of the small
  @Input() labelSmall: string = '';

  // Text of the tooltip
  @Input() labelTooltip: string = '';

  // Type of position on tooltip
  @Input() positionTooltip: string = EnumerablesTypesApp.enumPosition.Top;

  // Name of icon
  @Input() icon: string = '';

  // Name of icon on the button
  @Input() iconButton: string = EnumerableIconsPrimeng.icon.refresh;

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

  // Check if show button
  @Input() withButton: boolean = false;

  // Check if is required
  @Input() required: boolean = false;

  // Check if is textArea
  @Input() isTextArea: boolean = false;

  // Check if is UploadFile
  @Input() isUploadFile: boolean = false;

  // Check if is Radio Button
  @Input() isRadioButton: boolean = false;

  // Check if is Switch Input
  @Input() isSwitchInput: boolean = false;

  // Check if is Editor
  @Input() isEditor: boolean = false;

  // Check if is String List
  @Input() isStringList: boolean = false;

  // Check if is Checkbox
  @Input() isCheckbox: boolean = false;

  // Check if is Checkbox Button
  @Input() isCheckboxButton: boolean = false;

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

  // Object to return to Upload File
  @Output() returnUploadFile = new EventEmitter<any>();

  // Object to return to OnClick Event
  @Output() returnOnClick = new EventEmitter<any>();

  // Style class
  styleClass: string = '';
  styleClassLabel: string = '';

  // Upload File
  uploadedFiles: any[] = [];
  url: string = 'urlUpload';
  formatAccept: string = 'image/*';

  ngOnInit(): void {
    this.identifySizeOfTheInput();
    if (this.isCheckbox || this.isSwitchInput || this.isCheckboxButton) {
      this.toBinary(this.value);
    }
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
    this.identifyTypeOfTheInput();
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

  onUpload(event: any) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.returnUploadFile.emit(this.uploadedFiles);
  }

  onClick() {
    this.returnOnClick.emit();
  }

  toBinary(value: any) {
    if (value == 'true' || value == true) {
      return this.value = true;
    } else {
      return this.value = false;
    }
  }
}
