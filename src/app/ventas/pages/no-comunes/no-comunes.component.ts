import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Lily';
  genero: string = 'femenino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Jose', 'Pepe'];
  clientesMap = {
    '=0' : 'no tenemos ningún cliente espereando.',
    '=1' : 'tenemos un cliente esperando.',
    'other' : 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    this.nombre = 'Emanuel';
    this.genero = 'masculino'
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValuePipe
  persona = {
    nombre: 'Emanuel',
    edad: 31,
    direccion: 'Ottawa, Canadá'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval( 1000 ) // 0,1, 2, 3, ;

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa');
    }, 3500)
  });

}
