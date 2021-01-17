import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpData:HttpClient) { 
  }
  getData(){
    let url ='http://jsonplaceholder.typicode.com/todos/';
    return this.httpData.get(url);
  }
}
