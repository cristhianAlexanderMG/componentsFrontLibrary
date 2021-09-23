import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EnumerablesTypesApp} from "../../../models/enumerablesTypesApp";
import {UtilsService} from "../../../services/utils.service";

@Component({
  selector: 'app-input-primeng',
  templateUrl: './input-primeng.component.html',
  styleUrls: ['./input-primeng.component.scss']
})
export class InputPrimengComponent implements OnInit {
  @Input() value: any = null;
  @Input() label: string = 'Label';
  @Input() labelSmall: string = 'Small';
  @Input() icon: string = '';
  @Input() type: string = EnumerablesTypesApp.enumTypeInput.Text;
  @Input() size: string = EnumerablesTypesApp.enumSize.Normal;
  @Input() withIcon: boolean = false;
  @Input() withRangeOfNumbers: boolean = false;
  @Input() withRangeOfDates: boolean = false;
  @Input() showSmall: boolean = false;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() minimumNumber: number = 0;
  @Input() maximumNumber: number = 0;
  @Input() minimumDate: string = new Date().toDateString();
  @Input() maximumDate: string = new Date().toDateString();

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
