import {Component, OnInit, Output} from '@angular/core';
import {User} from '../../../dto/user';
import {UsersService} from '../../../service/users/users.service';
import {UsersStore} from '../../../service/users/users.store';
import {AppComponent} from '../../../app.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html'
})
export class UserListComponent implements OnInit {
  datas: User[];

  @Output() user: User;

  constructor(private dataTableService: UsersService,
              public app: AppComponent,
              public router: Router) {
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.dataTableService.getAll()
      .subscribe(res => {
        this.datas = res;
      });
  }

  deleteUser(id: number) {
    this.dataTableService.deleteUser(id).subscribe(data => {
      this.datas = this.datas.filter(u => u.id !== id);
    });
  }

  getUser(id: number) {
    this.dataTableService.getUser(id).subscribe(
      resData => {
        this.user = resData;
      });


    this.router.navigateByUrl('/detail/6', { state: { id: 1 , name: 'Angular' } });

    // this.app.navigateDiffrentPage('detail/' + this.user.id, this.user);
  }

}
