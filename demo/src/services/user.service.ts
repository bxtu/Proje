import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/user/';

  constructor(
    private http: HttpClient
  ) { }

  public createUser(user: UserModel) {
    return this.http.post(this.url + 'create', user);
  } 
}
