import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  botonSeleccionado: number | null = null;

  seleccionarBoton(boton: number) {
    this.botonSeleccionado = boton;
  }
}
