import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserCreateComponent} from './component/users/create/user-create.component';
import {UserListComponent} from './component/users/list/user-list.component';
import {UsersViewComponent} from './component/users/view/users-view.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'addUsers', component: UserCreateComponent},
  {path: 'detail/:id', component: UsersViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
