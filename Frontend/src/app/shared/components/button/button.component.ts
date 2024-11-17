import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() buttonClass: string = 'none';
  @Input() fontSize: 'xl' | 'lg'| 'md' | 'sm' | 'xs' | 'xxs' = 'md';
  @Input() disabled: boolean = false;
  @Input() borderRadius!: string;
  @Input() position: string = 'center';


  constructor() {
  }

  ngOnInit() {
  }

  protected readonly screen = screen;
}
