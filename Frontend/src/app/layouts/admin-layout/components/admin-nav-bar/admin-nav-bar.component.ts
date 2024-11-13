import { Component } from '@angular/core';
import {adminNav} from "../../../../core/helpers/admin.helper";

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrl: './admin-nav-bar.component.css'
})
export class AdminNavBarComponent {
  protected readonly links = adminNav;
}
