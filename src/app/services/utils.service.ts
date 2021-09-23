import { Injectable } from '@angular/core';
import {ResponseData} from "../models/responseData";
import {EnumerablesTypesApp} from "../models/enumerablesTypesApp";
import {ColumnTable} from "../models/columnTable";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  static getDataExample(): ResponseData {
    return {
      data: [
        {
          id: 1,
          name: 'Type 1'
        },
        {
          id: 2,
          name: 'Type 2'
        }
      ],
      status: EnumerablesTypesApp.enumStatusResponseData.success
    };
  }

  static emailWithCorrectFormat(email: string): boolean {
    if (email != null) {
      const functionEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return functionEmail.test(email);
    } else {
      return false;
    }
  }

  static convertDateToCorrectFormat(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return month + '-' + day + '-' + year;
  }

  static buildColumnTable(field: any, header: any, type: any, typeInput: any, required: any, disabled: any, items: any, object: any, labelSelected: any, nameLabel: any
  ): ColumnTable {
    return {
      field: field,
      header: header,
      type: type,
      typeInput: typeInput,
      required: required,
      disabled: disabled,
      items: items,
      object: object,
      labelSelected: labelSelected,
      nameLabel: nameLabel
    };
  }
}
