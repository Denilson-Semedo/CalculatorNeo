import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'calculadora_final';
  input1 = "";
  input2 = "";
  result = 0;
  num1=0;
  num2=0;

  sum():void{
    this.result = parseInt(this.input1) + parseInt(this.input2)
  }

  sub():void{
    this.result = parseInt(this.input1) - parseInt(this.input2)
  }

  mult():void{
    this.result = parseInt(this.input1) * parseInt(this.input2)
  }

  div():void{
    this.result = parseInt(this.input1) / parseInt(this.input2)
  }
}
