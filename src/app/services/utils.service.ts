import { Injectable } from '@angular/core';
import {ResponseData} from "../models/responseData";
import {EnumerablesTypesApp} from "../models/enumerablesTypesApp";
import {ColumnTable} from "../models/columnTable";
import { MessageModel } from '../models/messageModel';

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
        },
        {
          id: 3,
          name: 'Type 3'
        },
        {
          id: 4,
          name: 'Type 4'
        },
        {
          id: 5,
          name: 'Type 5'
        },
        {
          id: 6,
          name: 'Type 6'
        },
        {
          id: 7,
          name: 'Type 7'
        },
        {
          id: 8,
          name: 'Type 8'
        },
        {
          id: 9,
          name: 'Type 9'
        },
        {
          id: 10,
          name: 'Type 10'
        },
        {
          id: 11,
          name: 'Type 11'
        },
        {
          id: 12,
          name: 'Type 12'
        },
        {
          id: 13,
          name: 'Type 13'
        },
        {
          id: 14,
          name: 'Type 14'
        },
        {
          id: 15,
          name: 'Type 15'
        },
        {
          id: 16,
          name: 'Type 16'
        },
        {
          id: 17,
          name: 'Type 17'
        },
        {
          id: 18,
          name: 'Type 18'
        },
        {
          id: 19,
          name: 'Type 19'
        },
        {
          id: 20,
          name: 'Type 20'
        },
        {
          id: 21,
          name: 'Type 21'
        },
        {
          id: 22,
          name: 'Type 22'
        },
      ],
      status: EnumerablesTypesApp.enumStatusResponseData.success,
      message: new MessageModel()
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
