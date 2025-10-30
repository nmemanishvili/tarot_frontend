import { Component } from '@angular/core';
import { UserService, User } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  template: `
    <h2>Add User</h2>
    <form (submit)="addUser()">
      <input type="text" placeholder="Name" [(ngModel)]="name" name="name" required>
      <input type="email" placeholder="Email" [(ngModel)]="email" name="email" required>
      <button type="submit">Add</button>
    </form>
  `, 
  standalone: true,
  imports: [FormsModule]
})
export class UserFormComponent {
  name: string = '';
  email: string = '';

  constructor(private userService: UserService) {}

  addUser() {
    const user: User = { name: this.name, email: this.email };
    this.userService.addUser(user).subscribe(() => {
      alert('User added!');
      this.name = '';
      this.email = '';
    });
  }
}
