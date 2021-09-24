import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-editor-primeng',
  templateUrl: './editor-primeng.component.html',
  styleUrls: ['./editor-primeng.component.scss']
})
export class EditorPrimengComponent {
  @Input() text: string = '';
}
