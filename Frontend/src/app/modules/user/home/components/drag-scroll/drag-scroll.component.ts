import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {NewsModel} from "../../../../../data/models/news.interface";

@Component({
  selector: 'app-drag-scroll',
  templateUrl: './drag-scroll.component.html',
  styleUrl: './drag-scroll.component.css'
})
export class DragScrollComponent {

  constructor() {}

  @Input() data!:NewsModel[];

}
