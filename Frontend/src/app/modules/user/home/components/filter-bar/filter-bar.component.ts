import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent implements OnInit {
  isSearching:boolean = false;

  ngOnInit(): void {
  }

  changeSearchBar  = ():void => {
    this.isSearching = !this.isSearching;
  }

  protected readonly length = length;
}
