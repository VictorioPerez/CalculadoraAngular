import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.component.html',
  styleUrls: ['./calculador.component.css']
})
export class CalculadorComponent{
@Output() eventoEmitido = new EventEmitter<void>();
@Output() eventoOperacion = new EventEmitter<string>();

calcular(tipoOperacion:string){
  this.eventoOperacion.emit(tipoOperacion);
}
limpiar(){
  this.eventoEmitido.emit();
}


}
