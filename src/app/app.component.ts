import { BrowserModule} from '@angular/platform-browser'
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // Part 28 Services + API Call
  userdata:any;
  // constructor(private user:UserService){
  //   user.getData().subscribe(data => {
  //     this.userdata = data;
  //   });
  // }
  constructor(private values:UserService){
    this.userdata = values.getData()
  }
}