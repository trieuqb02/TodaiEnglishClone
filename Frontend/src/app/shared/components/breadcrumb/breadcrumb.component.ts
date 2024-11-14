import { Component } from '@angular/core';
import {BreadcrumbService} from "../../../data/services/breadcrumb.service";
import {BreadcrumbModel} from "../../../data/models/breadcrumb.interface";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
  breadcrumbs: Array<BreadcrumbModel> = [];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.breadcrumbChanged.subscribe(
      (crumbs: BreadcrumbModel[]) => {
        this.onBreadcrumbChange(crumbs);
      }
    );
  }

  ngOnInit(): void {
    this.breadcrumbs = this.breadcrumbService.breadcrumbs;
  }

  private onBreadcrumbChange(crumbs: BreadcrumbModel[]) {
    this.breadcrumbs = crumbs;
  }
}
