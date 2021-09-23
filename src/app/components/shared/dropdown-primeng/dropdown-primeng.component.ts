import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown-primeng',
  templateUrl: './dropdown-primeng.component.html',
  styleUrls: ['./dropdown-primeng.component.scss']
})
export class DropdownPrimengComponent {
  // Object to binding
  @Input() objectSelected: any = null;

  // Attribute to show it
  @Input() labelSelected: string = '';

  // Name of element
  @Input() nameLabel: string = '';

  // List of elements
  @Input() list: any = [];

  // Disabled active
  @Input() disabled: boolean = false;

  // If element is required
  @Input() required: boolean = false;

  // Return of complete element
  @Output() returnValue = new EventEmitter<any>();

  styleClass: string = '';
  styleClassLabel: string = '';
  namePlaceholder: string = 'Choose one';

  validation() {
    if (this.required) {
      if (this.objectSelected == null) {
        this.styleClass = 'ng-invalid ng-dirty';
        this.styleClassLabel = 'p-error';
      } else {
        if (this.objectSelected.uid == null) {
          this.styleClass = 'ng-invalid ng-dirty';
          this.styleClassLabel = 'p-error';
        } else {
          this.styleClass = '';
          this.styleClassLabel = '';
        }
      }
    }
    this.returnValue.emit(this.objectSelected);
  }
}
