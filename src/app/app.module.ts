import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TableModule} from 'primeng/table';

import {AppComponent} from './app.component';
import {UserListComponent} from './component/users/list/user-list.component';
import {UsersService} from './service/users/users.service';
import {HttpClientModule} from '@angular/common/http';
import {UserCreateComponent} from './component/users/create/user-create.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppStore} from './app.store';
import {UsersViewComponent} from './component/users/view/users-view.component';
import {UsersStore} from './service/users/users.store';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    UsersViewComponent
    // oluşturulan componentler
  ],
  imports: [
    BrowserModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    // routing Module
  ],
  providers: [
    UsersService,
    AppStore,
    UsersStore
    // service, store, resolve tanımları
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
