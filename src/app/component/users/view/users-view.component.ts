import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../service/users/users.service';
import {User} from '../../../dto/user';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  templateUrl: 'users-view.component.html',
  selector: 'app-users-view'
})
export class UsersViewComponent implements OnInit {

  user: User;
  id;

  constructor(private userService: UsersService,
              private aroute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.aroute);
  }

  getUser() {
    this.userService.getUser(this.id).subscribe(
      resData => {
        this.user = resData;
      });
  }

}
