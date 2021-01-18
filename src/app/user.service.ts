import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { user } from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpData:HttpClient) { 
  }
  getData(){
    // let url ='http://jsonplaceholder.typicode.com/todos/';
    // return this.httpData.get(url);
    const data:user[]=[
      {id: 101,
      name: 'ahsan',
      gender: 'male',
      pakistani:true},
      {id: 102,
      name: 'asim',
      gender: 'male',
      pakistani:true},
      {id: 103,
      name: 'sumya',
      gender: 'female',
      pakistani:true}
    ]
    return data;
  }

}
