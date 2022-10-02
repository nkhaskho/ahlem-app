import { User } from './../../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = environment.API_URL + '/users'

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<User[]>(this.endpoint);
  }

  addUser(user: User) {
    delete user._id;
    return this.http.post<User>(this.endpoint, user);
  }

  updateUser(user: User) {
    return this.http.post<User>(`${this.endpoint}/${user._id}`, user);
  }

  deleteUser(userId: string) {
    return this.http.delete(`${this.endpoint}/${userId}`);
  }

}
