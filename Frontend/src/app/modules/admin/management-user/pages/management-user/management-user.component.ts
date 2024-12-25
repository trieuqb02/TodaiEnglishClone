import { Component } from '@angular/core';
import {SelectionModel} from "../../../../../data/models/selection.interface";
import {UserModel} from "../../../../../data/models/user.interface";

@Component({
  selector: 'app-management-user',
  templateUrl: './management-user.component.html',
  styleUrl: './management-user.component.css'
})
export class ManagementUserComponent {
  public showNotification: boolean = false;

  public optionStatus: SelectionModel<string>[] = [
    {value: "", label: "All Status", disable: false},
    {value: "0", label: "Disable Status", disable: false},
    {value: "1", label: "Active Status", disable: false},
  ]

  public optionRole: SelectionModel<string>[] = [
    {value: "", label: "All Role", disable: false},
    {value: "0", label: "Admin Role", disable: false},
    {value: "1", label: "User Role", disable: false},
  ]

  public data:UserModel[] = [
    {
      id: '1',
      username: 'john_doe',
      firstName: 'John',
      lastName: "asd",
      thumbnail: "https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.6435-1/110657863_657409918181613_3973024119035370532_n.jpg?stp=dst-jpg_p160x160_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE_jwtgksxSDpGHpqVvlbu8i6jCxYKiamWLqMLFgqJqZTHApA9Kuv0WQZJYGYpD2ATNrNdfQnWsyPbvQpBXAGN1&_nc_ohc=jm1V6EfOwHAQ7kNvgHR2_xI&_nc_oc=Adg4Z0YfJzMQ_vL1GPjtS0308u1yXwPs82FFksVE9Pg7-3fBkk94XH1cGYbj3gB0QVDd0xF0Fk260lkFriHAitfJ&_nc_zt=24&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=AMBACKM32pXw4WXBy4gsYJ-&oh=00_AYCUB-0wZ5WYVn1uDfJRyNgzgF3rTRXGjFWpBDOVphqfPw&oe=679442A2",
      status: true,
      roleId: {
        id: 'ADMIN',
        name: 'Admin',
      },
    },
    {
      id: '2',
      username: 'jane_smith',
      firstName: 'Jane',
      lastName: "asd",
      status: false,
      roleId: {
        id: 'VIEWER',
        name: 'Viewer',
      },
    },
    {
      id: '3',
      username: 'bob_martin',
      firstName: 'Bob',
      lastName: "asd",
      status: true,
      roleId: {
        id: 'VIEWER',
        name: 'Viewer',
      },
    },
  ];

  public generateAvatar(name: string): string {
    const firstLetter = name.charAt(0).toUpperCase();
    const backgroundColor = this.getRandomColor();
    return `https://ui-avatars.com/api/?name=${firstLetter}&background=${backgroundColor}&color=ffffff&size=128`;
  }

  public getRandomColor(): string {
    const colors = ['6BB5A7', 'FF5733', '337AFF', 'FFC300', 'C70039'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  onValueChange(value: string): void {

  }

  selectionChange(value: string): void {

  }
}
