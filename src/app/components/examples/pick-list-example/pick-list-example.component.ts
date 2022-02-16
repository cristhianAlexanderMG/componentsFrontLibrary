import { Component, OnInit } from '@angular/core';
import { PickListService } from 'src/app/services/pick-list.service';

@Component({
  selector: 'app-pick-list-example',
  templateUrl: './pick-list-example.component.html',
  styleUrls: ['./pick-list-example.component.scss']
})
export class PickListExampleComponent {
  sourceProducts: any = [];

  targetProducts: any = [];

  constructor(private pickListService: PickListService) { 
    this.sourceProducts = this.pickListService.getData();
    this.targetProducts = [];
  }

}
