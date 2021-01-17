import { BrowserModule} from '@angular/platform-browser'
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service'
import { isConstructorDeclaration } from 'typescript';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // Part 27 Services
  constructor(private user:UserService){
    console.log(user.getData());
  }
}