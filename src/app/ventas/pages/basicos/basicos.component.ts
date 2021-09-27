import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'emanuel';
  nombreUpper: string = 'EMANUEL';
  nombreCompleto: string = 'EmAnUeL FiTtA';
 
  fecha: Date = new Date(); // dia de hoy
  
}
