import { BrowserModule} from '@angular/platform-browser'
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Part 23 Pipes
  money:number = 12345;
  tarikh = Date.now();
  text:string = 'this Is mY some text to display'
  

}
