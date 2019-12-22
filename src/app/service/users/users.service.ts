import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../../dto/user';

@Injectable()
export class UsersService{
  private BASE_PATH = 'http://localhost:8090/users/';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(this.BASE_PATH + 'all');
  }

  getUser(id: number) {
    return this.http.get<User>(this.BASE_PATH + id);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.BASE_PATH}${id}`, {responseType: 'json'});
  }

  createUser(user: User) {
    return this.http.post<User>(this.BASE_PATH + 'create', user);
  }
}
