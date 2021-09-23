import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../../../services/utils.service";
import {ColumnTable} from "../../../models/columnTable";
import {EnumerablesTypesApp} from "../../../models/enumerablesTypesApp";

@Component({
  selector: 'app-table-primeng-example',
  templateUrl: './table-primeng-example.component.html',
  styleUrls: ['./table-primeng-example.component.scss']
})
export class TablePrimengExampleComponent implements OnInit {
  data = UtilsService.getDataExample().data;
  loading: boolean = false;
  columns: ColumnTable[] = []
  objectExample = {
    id: 0,
    name: ''
  }

  ngOnInit(): void {
    this.buildColumns();
  }

  private buildColumns(): void {
    this.columns.push(UtilsService.buildColumnTable('id', 'Id', EnumerablesTypesApp.enumTypeColumnTable.Input, EnumerablesTypesApp.enumTypeInput.Text, true, false, null, null, null, null));
    this.columns.push(UtilsService.buildColumnTable('name', 'Name', EnumerablesTypesApp.enumTypeColumnTable.Input, EnumerablesTypesApp.enumTypeInput.Text, true, false, null, null, null, null));
  }

  returnValue(event: any) {

  }
}
