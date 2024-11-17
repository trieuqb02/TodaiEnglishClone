import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {
  @Input() src: string | undefined;
  @Input() alt: string = 'Avatar';
  @Input() size: number = 50;
  @Input() name: string = '';
}
