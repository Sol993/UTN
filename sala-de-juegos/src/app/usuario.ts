export class Usuario {
    apellido:string|undefined;
    nombre:string|undefined;
    mostrar(){
        console.log(this.apellido,this.nombre);
    }
}
