import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationCharService } from 'src/app/services/organization-char.service';

@Component({
  selector: 'app-organization-char-example',
  templateUrl: './organization-char-example.component.html',
  styleUrls: ['./organization-char-example.component.scss']
})
export class OrganizationCharExampleComponent {
  data: TreeNode[];
  selectedNode: TreeNode | null = null;

  constructor(private organizationCharService: OrganizationCharService) {
    this.data = this.organizationCharService.getData();
  }

  onNodeSelect(event: any) {
    this.selectedNode = event.node;
  }
}
