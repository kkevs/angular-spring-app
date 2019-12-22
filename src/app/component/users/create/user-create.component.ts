import {Component} from '@angular/core';
import {User} from '../../../dto/user';
import {UsersService} from '../../../service/users/users.service';

@Component({
  templateUrl: 'user-create.component.html',
  selector: 'app-user-create'
})
export class UserCreateComponent {

  user: User = new User();

  constructor(private userService: UsersService) {
  }

  createUser() {
    this.userService.createUser(this.user).subscribe(data => {
    });
  }

}
