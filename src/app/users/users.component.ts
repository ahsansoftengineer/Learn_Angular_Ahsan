import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // @Output() childOutputProperty:EventEmitter<any> = new EventEmitter()
  // @Output() childOutputProperty:EventEmitter<any> = new EventEmitter<any>()
  @Output() childOutputProperty = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
    this.childOutputProperty.emit(this.childdata)
  }
  childdata = [
    {
      name:'ahsan',
      gender:'male',
      age:25
    },
    {
      name:'asim',
      gender:'male',
      age:24
    },
    {
      name:'sumaya',
      gender:'female',
      age:26
    }
  ]
}
