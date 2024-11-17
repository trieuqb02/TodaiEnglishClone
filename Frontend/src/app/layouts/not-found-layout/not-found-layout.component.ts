import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found-layout',
  templateUrl: './not-found-layout.component.html',
  styleUrls: ['./not-found-layout.component.css']
})
export class NotFoundLayoutComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {}

  navigateBack(): void {
    this.location.back();
  }
}
