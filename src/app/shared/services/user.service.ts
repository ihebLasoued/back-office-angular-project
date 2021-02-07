import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  listeUsers() {
    return this.http.get<User[]>("http://127.0.0.1:8000/api/allUsers");
  }
  deleteUser(user : User) {
    return this.http.post("http://127.0.0.1:8000/api/deleteUser",user );
  }
}
