import { BrowserModule} from '@angular/platform-browser'
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Part 20 Pass Data From Parent To Child
  parentfield = "King Kong"
  data = {
    name:'asim',
    gender:'male',
    age:'27'
  }
}
