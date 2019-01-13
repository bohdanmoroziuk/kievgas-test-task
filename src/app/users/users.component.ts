import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  sortName: string = 'id';
  sortReverse: boolean = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService
      .getUsers()
      .subscribe(users => this.users = users);
  }

  deleteUser(user: User): void {
    this.users = this.users.filter(u => u !== user);

    this.userService
      .deleteUser(user)
      .subscribe();
  }

  setSortOptions(name: string): void {
    this.sortName = name;
    this.sortReverse = !this.sortReverse;
  }
}
