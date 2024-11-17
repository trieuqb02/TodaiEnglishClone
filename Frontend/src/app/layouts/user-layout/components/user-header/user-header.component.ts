import {Component, OnInit} from '@angular/core';
import {userMenu} from '../../../../core/helpers/user.helper'

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css',
})
export class UserHeaderComponent implements OnInit {

  protected readonly userMenu = userMenu;

  constructor() {
  }

  ngOnInit(): void {
  }



}
