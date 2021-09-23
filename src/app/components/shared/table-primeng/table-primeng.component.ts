import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EnumerablesTypesApp} from "../../../models/enumerablesTypesApp";

@Component({
  selector: 'app-table-primeng',
  templateUrl: './table-primeng.component.html',
  styleUrls: ['./table-primeng.component.scss']
})
export class TablePrimengComponent implements OnInit {
  // Title on the table
  @Input() titleTable: string = 'Title Table';

  // Data to show in table
  @Input() data: any = [];

  // Copy of an object to handle in the table
  @Input() objectExample: any = null;

  // Columns on the table
  @Input() columns: any = [];

  @Input() itIsUpdatable: boolean = true;
  @Input() itIsDownloadable: boolean = true;
  @Input() loading: boolean = false;

  @Output() returnValue = new EventEmitter<any>();

  visibleModal: boolean = false;
  selectedObject: any = null;

  totalRecords: number = 0;
  messageTotalRecords: string = '';
  rowsPerPageOptions: any = [];

  styleClass: string = '';
  selectionMode: string = '';

  // Button
  icon1: string = '';
  icon2: string = '';
  icon3: string = '';
  icon4: string = '';
  nameButton1: string = '';
  nameButton2: string = '';
  nameButton3: string = '';
  nameButton4: string = '';
  disabledButtonModal: boolean = true;

  enumTypeAlignment = EnumerablesTypesApp.enumTypeAlignment;
  enumTypeWord = EnumerablesTypesApp.enumTypeWord;
  enumTypeColumnTable = EnumerablesTypesApp.enumTypeColumnTable;
  enumTypeInput = EnumerablesTypesApp.enumTypeInput;

  ngOnInit(): void {
    this.buildTable();
  }

  private buildTable(): void {
    this.loading = true;
    this.icon1 = 'pi pi-plus-circle';
    this.icon2 = 'pi pi-download';
    this.icon3 = 'pi pi-check-circle';
    this.icon4 = 'pi pi-times-circle';
    this.nameButton1 = 'Nuevo';
    this.nameButton2 = 'Exportar';
    this.nameButton3 = 'Aceptar';
    this.nameButton4 = 'Cancelar';
    this.selectionMode = 'single';
    this.styleClass = 'p-datatable-sm p-datatable-gridlines p-datatable-striped';
    this.totalRecords = this.data.length;
    this.messageTotalRecords = 'Cantidad de registros: ' + this.totalRecords;
    this.selectedObject = Object.assign({}, this.objectExample);
    this.rowsPerPageOptions = [5, 10, 50, 100];
    this.loading = false;
  }

  onRowSelect() {
    this.nameButton1 = 'Editar';
    this.icon1 = 'pi pi-pencil';
  }

  onRowUnselect() {
    this.nameButton1 = 'Nuevo';
    this.icon1 = 'pi pi-plus-circle';
    this.selectedObject = Object.assign({}, this.objectExample);
  }

  openModal() {
    this.visibleModal = true;
    if (this.selectedObject.uid != null) {
      this.validateInputsRequired();
    }
  }

  closeModal() {
    this.visibleModal = false;
    this.onRowUnselect();
  }

  saveModal() {
    this.returnValue.emit(this.selectedObject);
    this.closeModal();
  }

  exportData() {
  }

  validateReturnValue(field: string, value: any, type: string) {
    switch (type) {
      case this.enumTypeColumnTable.Input: {
        this.selectedObject[field] = value;
        this.validateInputsRequired();
        break;
      }
      case this.enumTypeColumnTable.Dropdown: {
        this.selectedObject[field] = value;
        this.validateInputsRequired();
        break;
      }
      case this.enumTypeColumnTable.Calendar: {
        this.selectedObject[field] = value;
        this.validateInputsRequired();
        break;
      }
    }
  }

  private validateInputsRequired(): void {
    let anEmptyFieldWasFound: boolean = false;
    this.columns.forEach((x: any) => {
      if (x.required) {
        if (this.selectedObject[x.field] == null || this.selectedObject[x.field] == '') {
          anEmptyFieldWasFound = true;
        }
      }
    });
    this.disabledButtonModal = anEmptyFieldWasFound;
  }

  getToShowRelationByUid(list: [], uid: string, label: string): string {
    let labelReturn = 'Not Found';
    list.forEach((x: any) => {
      if (x.uid == uid) {
        if (x[label] != undefined) {
          labelReturn = x[label];
        }
      }
    });
    return labelReturn;
  }

  showCalendar(field: any): string {
    let dateReturn = null;
    try {
      dateReturn = field.toDate();
    } catch (e) {
      dateReturn = field;
    }
    return dateReturn;
  }

  searchObjectDropdown(objectReturn: any, list: [], field: string): any {
    list.forEach((x: any) => {
      if (x.uid == field) {
        objectReturn = x;
      }
    });
    return objectReturn;
  }
}
