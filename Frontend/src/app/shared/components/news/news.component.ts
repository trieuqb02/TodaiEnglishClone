import {Component, Input} from '@angular/core';
import {NewsModel} from "../../../data/models/news.interface";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  @Input() data!: NewsModel;
  @Input() bookmark: boolean = true;

  constructor() {}

}
