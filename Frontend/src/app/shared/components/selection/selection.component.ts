import {Component, Input} from '@angular/core';
import {SelectionModel} from "../../../data/models/selection.interface";

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css'
})
export class SelectionComponent {
  @Input() borderRadius!: string;
  @Input() selections!: SelectionModel<number | string>[];
}
