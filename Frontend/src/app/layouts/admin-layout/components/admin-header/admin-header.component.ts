import { Component } from '@angular/core';
import {adminMenu} from '../../../../core/helpers/admin.helper'
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
  protected readonly adminMenu = adminMenu;
}
