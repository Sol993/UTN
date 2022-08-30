import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  usuario: Usuario= new Usuario();
 
  constructor() {
  
   }

  ngOnInit(): void {
   
 

    
  }
  public Aceptar():void{
    console.log(this.usuario);
  }

}
