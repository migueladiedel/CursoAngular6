import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  numberOne = '';
  numberTwo = '';
  contadorNum = 0;
  // tslint:disable-next-line:no-inferrable-types
  total: string = '';
  // tslint:disable-next-line:no-inferrable-types
  numNow: string = '';

  constructor() {}

  public oper(oper: string) {
    if (this.contadorNum >= 1) {
      this.numberTwo = this.numNow;
      switch (oper) {
        case '*':
          this.asignarTotal(parseInt(this.numberOne, 10) * parseInt(this.numberTwo, 10) + '');
          console.log(this.numberOne + ' ' + this.numberTwo);
          break;
        case '/':
          break;
        case '+':
          break;
        case '-':
          break;
        case 'Raiz':
          // Math.sqrt(1)
          break;
        default:
          break;
      }
      this.contadorNum++;
    } else {
      this.contadorNum++;
      this.total = this.numNow;
      this.numberOne = this.numNow;
      this.numNow = '';
    }
  }

  public acumula(num: string) {
    this.numNow += num;
  }
  public resetTotal() {
    this.numNow = '';
    this.asignarTotal('0');
    this.contadorNum = 0;
  }

  public asignarTotal(salida: string) {
    this.total = salida;
  }
  public calcTotal() {}

  public quitarOneDigit() {
    if (this.numNow.length > 1) {
      this.asignarTotal(this.numNow.substring(0, this.numNow.length - 1));
      this.numNow = this.numNow.substring(0, this.numNow.length - 1);
    }
  }

  // public cambioSig(first: number, second: number) {
  //   return first / second;
  // }

  ngOnInit() {}
}
