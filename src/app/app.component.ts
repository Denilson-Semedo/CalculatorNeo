import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  inputField = "0";
  LastValue = "";
  op = "";
  showCalc = "";
  stat = "initial";

  setOp(x: string): void {
     
    this.op = x;
    this.LastValue = this.inputField;
    this.showCalc = this.LastValue + " " + this.op;
  }

  addVal(val: string): void{
    if (this.stat == "inital") {
      this.inputField = this.inputField + val;
    } else {
      this.inputField = val;
    }
  }

  calc(): void {
    switch (this.op) {
      case "+":
        this.sum();
        break;
      case "-":
        this.sub();
        break;
      case "*":
        this.mult();
        break;
      case "/":
        this.div();
        break;
        case "%":
        this.percent();
        break;
        case "espDiv":
          this.espDiv();
          break;
          case "quadrado":
        this.quadrado();
        break;
        case "raiz":
        this.raiz();
        break;
      default:
        break;
    }
  }

  sum(): void {
    this.showCalc = this.LastValue + " + " + this.inputField;
    this.inputField = String(parseInt(this.LastValue) + parseInt(this.inputField))
  }

  sub(): void {
    this.inputField = String(parseInt(this.LastValue) - parseInt(this.inputField))
  }

  mult(): void {
    this.inputField = String(parseInt(this.LastValue) * parseInt(this.inputField))
  }

  div(): void {
    this.inputField = String(parseInt(this.LastValue) / parseInt(this.inputField))
  }
  percent(): void {

  }

  espDiv(): void {
    this.inputField = String(1 / parseInt(this.inputField))
  }

  quadrado(): void {
    this.inputField = String(parseInt(this.inputField) * parseInt(this.inputField))
  }
  
  raiz(): void{
    this.inputField = String(Math.sqrt(parseInt(this.inputField)))
  }

  negativo(): void {
    this.inputField = String(-1 * parseInt(this.inputField));
  }
}
