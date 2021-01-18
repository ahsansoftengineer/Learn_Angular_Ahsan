import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent as alic } from './admin/login/login.component'
import { ListComponent as alc } from './admin/list/list.component'
import { LoginComponent as ulic} from './user/login/login.component'
import { ListComponent as ulc} from './user/list/list.component'


const routes: Routes = [
  {
    path:'admin', children:[
     {path:'login', component:alic },
     {path:'list', component:alc }
    ]
  },
  {
    path:'user', children:[
     {path:'login', component:ulic },
     {path:'list', component:ulc }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
