import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DemoComponent } from '../demo/demo.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { PersonasComponent } from '../personas/personas.component';
import { BlobComponent } from '../blob/blob.component';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
  entryComponents: [ HomeComponent, DemoComponent, CalculadoraComponent, PersonasComponent, BlobComponent]
})
export class DinamicosComponent implements OnInit {
  menu = [
    { texto: 'Blob', componente: BlobComponent},
    { texto: 'Personal', componente: PersonasComponent},
    { texto: 'Inicio', componente: HomeComponent},
    { texto: 'Demo', componente: DemoComponent},
    { texto: 'Calculadora', componente: CalculadoraComponent},
  ];
  componente = this.menu[0].componente;
  constructor() { }

  ngOnInit() {
  }

  selecciona(indice: number) {
    if ( 0 <= indice && indice < this.menu.length ) {
      this.componente = this.menu[indice].componente;
    }
  }

}
