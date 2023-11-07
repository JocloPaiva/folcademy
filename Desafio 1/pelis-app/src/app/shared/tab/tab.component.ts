import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  botonSeleccionado: number | null = null;
  selectedCategory: string = 'Todos';

  seleccionarBoton(boton: number) {
    this.botonSeleccionado = boton;
  }
  setSelectedCategory(category: string) {
    this.selectedCategory = category;
  }

  @Input() options: any[] = [] 
  @Input() active: string = '' 
  @Output() handleSelectOption = new EventEmitter<string>();

  selectOption(value: any) {
    return this.handleSelectOption.emit(value)
  }
}
