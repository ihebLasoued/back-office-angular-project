import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../config';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  listeUsers() {
    return this.http.get<User[]>(Config.baseUrl+"/allUsers");
  }
  deleteUser(id : number) {
    return this.http.delete(Config.baseUrl+"/deleteUser/"+id );
  }
}
