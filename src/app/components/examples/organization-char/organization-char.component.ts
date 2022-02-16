import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationCharService } from 'src/app/services/organization-char.service';

@Component({
  selector: 'app-organization-char',
  templateUrl: './organization-char.component.html',
  styleUrls: ['./organization-char.component.scss']
})
export class OrganizationCharComponent {
  data: TreeNode[];
  selectedNode: TreeNode | null = null;

  constructor(private organizationCharService: OrganizationCharService) {
    this.data = this.organizationCharService.getData();
  }

  onNodeSelect(event: any) {
    this.selectedNode = event.node;
  }
}
