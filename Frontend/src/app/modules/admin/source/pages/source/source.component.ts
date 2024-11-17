import { Component } from '@angular/core';
import {SelectionModel} from "../../../../../data/models/selection.interface";

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrl: './source.component.css'
})
export class SourceComponent {
  selection: SelectionModel<number>[] = [
    { id: -1, name: "Tất cả", disable: false},
    { id: 0, name: "Không hoạt động", disable: false},
    { id: 1, name: "Hoạt động", disable: false},
  ]
}
