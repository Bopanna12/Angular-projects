import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempComponent } from './temp/temp.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    TempComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TempComponent,
    LoginComponent
  ]

})
export class UsersModule { }
