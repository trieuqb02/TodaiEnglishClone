import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-title-header',
  templateUrl: './title-header.component.html',
  styleUrl: './title-header.component.css'
})
export class TitleHeaderComponent {
  @Input() title!: string;
  @Input() subTitle!: string;
}
