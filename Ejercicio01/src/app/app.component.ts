import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio01';
  
  public edaduno:number=0;
  public edaddos:number=0;
  public resultadosuma:number|undefined;
  public resultadopromedio:number|undefined;
  
  ///funciones
  public suma():void{
    this.resultadosuma= this.edaduno + this.edaddos;
    this.resultadopromedio=(this.resultadosuma)/2;
  }

  clear():void{
    this.edaduno=0;
    this.edaddos=0;
    this.resultadosuma= 0;
    this.resultadopromedio=0;

  }
}

