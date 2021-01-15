import { Component } from '@angular/core';
interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Ahsan Soft Engineer';
  // fname: string = 'Muhammad';
  // lname: string = 'Ahsan';
  // age: number = 28;

  // employee() {
  //   return 'Full Name = ' + this.fname + ' ' + this.lname + ' Age = ' + this.age
  // }
  // siblings = { brother : ['Asim', 'Mobin','Yousuf', 'Ibrahim'], sister : 'Sumaya' }
  // siteUrl = window.location.href
  // myfunction(){
  //   alert('Muhammad Ahsan');
  // }
  // myevent(recivedevent:any){
  //   console.log(recivedevent)
  // }
  // Part 11 Property Binding
  // disabledbox = true;
  // name = "Mark"
  // enabledbox(){
  //   this.disabledbox = false;
  // }
  // Part 12 ifElse Statements
  // show=true;
  // expression=false;
  // color='purple';
  // Part 13 Switch Statements
  // month='oct'
  // Part 14 For Loop
  // months=['jan', 'feb', 'mar', 'apr', 'may']
  // employees=[
  //   {
  //     name:'ahsan',
  //     gender:'male',
  //     age:29,
  //     email:true
  //   },
  //   {
  //     name:'asim',
  //     gender:'male',
  //     age:27,
  //     email:false
  //   },
  //   {
  //     name:'mobin',
  //     gender:'male',
  //     age:25,
  //     email:true
  //   },
  //   {
  //     name:'sumaya',
  //     gender:'female',
  //     age:30,
  //     email:false
  //   }
  // ]
  // employeez={
  //   employee1:{
  //     name:'ahsan',
  //     gender:'male',
  //     age:29,
  //     email:true
  //   },
  //   employee2:{
  //     name:'ahsan',
  //     gender:'male',
  //     age:29,
  //     email:true
  //   },
  // }
  // Part 15 Forms
  // getUserValue(data:any)
  // {
  //   console.log(data);
  // }
  // Part 17 Style Binding
  // color='gray'
  // errColor = true;
  // ChangeColor(){
  //   if(this.color=='gray'){
  //     this.color ='blue';
  //   }
  //   else{
  //     this.color = 'gray';
  //   }
  // }
  // Part 18 Bootstrap
  // alerts: Alert[];

  // constructor() {
  //   this.reset();
  // }

  // close(alert: Alert) {
  //   this.alerts.splice(this.alerts.indexOf(alert), 1);
  // }

  // reset() {
  //   this.alerts = Array.from(ALERTS);
  // }
  // model = {
  //   left: true,
  //   middle: false,
  //   right: false
  // };
  // Part 19 Add Material UI
}
