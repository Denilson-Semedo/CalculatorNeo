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
  stat = false;

  setOp(x: string): void {
    this.op = x;
    this.LastValue = this.inputField;
    this.showCalc = this.LastValue + " " + this.op;
    this.stat = false;
  }

  addVal(val: string): void {
    if (this.stat == false) {
      this.inputField = val;
      this.stat = true;
    } else {
      this.inputField = this.inputField + val;
    }
  }

  clear(): void {
    this.inputField = "0";
    this.LastValue = "";
    this.op = "";
    this.showCalc = "";
    this.stat = false;
  }

  delet(): void {
    this.inputField = this.inputField.slice(0,this.inputField.length - 1);
    //str = str.slice(0,str.length - 1);
  }

  calc(): void {
    if (this.stat == true) {
      switch (this.op) {
        case "+":
          this.sum();
          this.stat = false;
          break;
        case "-":
          this.sub();
          this.stat = false;
          break;
        case "*":
          this.mult();
          this.stat = false;
          break;
        case "/":
          this.div();
          this.stat = false;
          break;
        default:
          break;
      }
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

  espDiv(): void {
    this.inputField = String(1 / parseInt(this.inputField))
  }

  quadrado(): void {
    this.inputField = String(parseInt(this.inputField) * parseInt(this.inputField))
  }

  raiz(): void {
    this.inputField = String(Math.sqrt(parseInt(this.inputField)))
  }

  negativo(): void {
    this.inputField = String(-1 * parseInt(this.inputField));
  }
}
