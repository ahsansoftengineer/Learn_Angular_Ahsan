import { BrowserModule} from '@angular/platform-browser'
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Part 21 Pass Data From Child To Parent
  datafromchild:any;
  parentReciveProperty($event:any){
    this.datafromchild = $event;
  }
}
