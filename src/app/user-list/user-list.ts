import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  template: `
    <h2>Users</h2>
    <ul>
      @for(user of users; track user.id){
        <li>{{user.name}} {{user.email}}</li>
      }
    </ul>
  `
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.users = data);
  }
}
