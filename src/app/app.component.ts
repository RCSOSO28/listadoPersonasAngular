import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  
  personas: Persona[] = [
    new Persona('Juan', 'Perez'), 
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara')
  ];
  
  nombreInput:string = '';
  apellidoInput:string = '';

  agregarPersona(){
    let personaAux = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(personaAux);
  }
}
