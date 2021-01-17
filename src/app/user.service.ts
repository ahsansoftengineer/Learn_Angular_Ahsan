import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  getData(){
    return{
      name:'ahsan',
      gender:'male',
      age:29
    }
  }
}
