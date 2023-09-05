import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent  {
  numero1:number = 0;
  numero2:number = 0;
  resultado:number = 0;



  accionLimpiar(){
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }
  
  accionCalcular(operacion:string){
    switch (operacion) {
      case "suma":
        this.resultado = this.numero1 + this.numero2;
        break;

      case "resta":
        this.resultado = this.numero1 - this.numero2;
        break;

      case "division":
        this.resultado = this.numero1 /  this.numero2;
        break;

        case "multiplicacion":
        this.resultado = this.numero1 *  this.numero2;
        break;

        case "elevado":
        this.resultado = Math.pow(this.numero1,  this.numero2);
        break;
      default: prompt("Error!")
        break;
    }
  }

}
 
