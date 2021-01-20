import { BrowserModule} from '@angular/platform-browser'
import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private vcr:ViewContainerRef, private cfr:ComponentFactoryResolver){}
  async listloading(){
    this.vcr.clear();
    const { ListComponent } = await import('./list/list.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(ListComponent)
    );
  }
  async loginloading(){
    this.vcr.clear();
    const { LoginComponent } = await import('./login/login.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(LoginComponent)
    );
  }
}