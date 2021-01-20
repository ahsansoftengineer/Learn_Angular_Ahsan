import { BrowserModule} from '@angular/platform-browser'
import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  onSubmit(data:any){
    console.log(data);
  }
}
