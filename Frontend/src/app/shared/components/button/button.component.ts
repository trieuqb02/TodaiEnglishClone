import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() buttonClass: string = 'none';
  @Input() disabled: boolean = false;
  @Input() borderRadius!: string;
  @Input() position: string = 'center';
  @Output() onClick = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}
