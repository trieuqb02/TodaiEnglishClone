import {AfterViewInit, Component, ElementRef, EventEmitter, Output, output, ViewChild} from '@angular/core';
import {debounceTime, fromEvent, map} from "rxjs";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent implements AfterViewInit{
  @Output() valueChange : EventEmitter<string> = new EventEmitter();
  @ViewChild('searchInput') searchInput!: ElementRef;

  ngAfterViewInit() {
    fromEvent<KeyboardEvent>(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(300),
      map((event: KeyboardEvent) => {
        const inputElement = event.target as HTMLInputElement;
        return inputElement.value;
      })
    ).subscribe(value => {
      this.valueChange.emit(value);
    });
  }
}
