import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  favMovie = 'Titanic';
  title = 'day10-project';

  details=[{
    fname:"jackie",
    age:20,
    ph:641616376
  },
  {
    fname:"jackie chan",
    age:24,
    ph:71675875
  },
  {
    fname:"chan",
    age:29,ph:71878741874
  }
]
numbers=[1,2,3,4,5,6,7,8,9,10]

ngColor="orange";
evenColor="crimson";

dateExample=Date.now();





onSubmit(formValue:NgForm){
  console.log(formValue);
  console.log(formValue.value);
}
ename:string='';
dname:string='';
coment:string='';
cars:string='';





}
