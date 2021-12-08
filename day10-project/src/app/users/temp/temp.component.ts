import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  template: `
  <div class="content">
  <h1> Employee Interest Survey Form</h1>
  <form>
  <label for="ename">Enter your name:</label>
  <input type="text" id="ename" name="ename"><br/><br/>
  <label for="dname">Enter your Department:</label>
  <input type="text" id="dname" name="dname"><br/>
  <br/>
  Tell us a Little about yourself :<textarea rows="4" cols="100" name="coment" >Enter text here...</textarea>
  <p>Do you Exercise at Home?</p>
  <input type="radio" id="html" value="html">
  <label for="html">Yes</label>
  <input type="radio" id="html1" value="html1">
  <label for="html1">No</label>
  <p>How do you like to read about your favourite topic</p>
  <input type="checkbox" id="books" name="books">
  <label for="books" >Books</label>

  <input type="checkbox" id="online" name="online">
  <label for="online" >Online Resource</label>

  <input type="checkbox" id="app" name="app">
  <label for="app" >Phone App</label>

  <input type="checkbox" id="mag" name="mag">
  <label for="mag" >Magazines</label>
  <br/><br/>

  <label for="cars">What genre of movies do you like :</label>
  <select name="cars" >
  <option
  value="comedy">Comedy</option>
  <option
  value="thril">Thriller</option>
  <option
  value="rom">Romantics</option>
  <option
  value="Hor">Horror</option>
  </select>
  <br/><br/>

  <button type="button"> Submit</button>


  </form>
  </div>` ,
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

}
