import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day9-project';
  
  getN(par){
    console.log(par);
    return par;
  }
  getName1(){
     console.log("Keyup event has occured");

  }
  getName2(){
    console.log("Keydown event has occured");

 }
 getN1(){
  console.log("mouse was pointed");

}
getN2(){
  console.log("mouse went down");

}
name="Bopanna";
disableBox=true;
enableInput(){
  this.disableBox=false;
}

disableBox1=true;
enablePlaceholder(){
  this.disableBox1=false;
}
day=true;
month=false;
month1="jan";
month2="feb"


}
