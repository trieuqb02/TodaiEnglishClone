import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {SelectionModel} from "../../../data/models/selection.interface";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => SelectionComponent),
  }]
})
export class SelectionComponent implements ControlValueAccessor {
  @Input() borderRadius!: string;
  @Input() options!: SelectionModel<any>[]
  @Input() disabled: boolean = false;
  @Output() selectionChange:EventEmitter<string> = new EventEmitter<string>();

  selected!: string;

  private onTouched: Function = (): void => {};

  private onChanged: Function = (value: string):void => {};

  registerOnChange(fn: Function): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.selected = value;
  }

  onChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const value: string = selectElement.value as string;
    this.selectionChange.emit(value);
    this.onChanged(value);
    this.onTouched();
  }
}
